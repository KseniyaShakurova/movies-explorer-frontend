import React from "react";
import "../App/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt") || false
  );

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [infoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [infoTooltipTitle, setInfoTooltipTitle] = useState("");
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [apiErrors, setApiErrors] = React.useState({
    login: {},
    register: {},
    profile: {},
  });

  const navigate = useNavigate();

  const [isRequestSending, setIsRequestSending] = useState(false);

  function handleEditProfile(data) {
    setIsLoading(true);
    mainApi
      .setUserInfo(data, localStorage.jwt)

      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data.data);
        setInfoToolTipPopupOpen(true);
        setInfoTooltipTitle("Данные успешно изменены!");
        setIsSuccess(true);
      })
      .catch((e) => {
        setInfoToolTipPopupOpen(true);
        setInfoTooltipTitle("При обновлении профиля произошла ошибка!");
        setIsSuccess(false);
      })
      .finally(() => {
        setIsRequestSending(true);
      });
  }

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi
        .checkToken(localStorage.jwt)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        })
        .finally(() => {
          setIsTokenChecked(true);
        });
    } else {
      setIsTokenChecked(true);
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getUserInfo(localStorage.jwt),
        mainApi.getMovie(localStorage.jwt),
      ])

        .then(([data, movies]) => {
          setCurrentUser(data.data);
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.log(err);
          setIsTokenChecked(true);
        });
    } else {
      setIsLoggedIn(false);
      setIsTokenChecked(true);
    }
  }, [isLoggedIn]);

  function handleRegisterUser(name, email, password) {
    return mainApi
      .registerUser(name, email, password)
      .then((data) => {
        if (data) {
          setInfoToolTipPopupOpen(true);
          handleAuthUser(email, password);
          setInfoTooltipTitle("Вы успешно зарегистрировались!");
          setIsSuccess(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400-некорректно заполнено одно из полей");
        }
        setInfoToolTipPopupOpen(true);
        setInfoTooltipTitle("При регистрации пользователя произошла ошибка.");
        setIsSuccess(false);
        setIsLoading(false);
      });
  }

  function handleAuthUser(email, password) {
    mainApi
      .loginUser(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        setInfoTooltipTitle("Вы успешно вошли!");
        setIsSuccess(true);
        setInfoToolTipPopupOpen(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей ");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
        setInfoToolTipPopupOpen(true);
        setInfoTooltipTitle("Вы ввели неверный логин или пароль!");
        setIsSuccess(false);
        setIsLoading(false);
      });
  }

  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
  }

  function handleMovieDelete(deleteMovieId) {
    mainApi
      .deleteMovies(deleteMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          })
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`));
  }

  function handleSaveOrDelete(data) {
    const MovieSave = savedMovies.some((movie) => movie.movieId === data.id);

    if (MovieSave) {
      const selectedMovie = savedMovies.find(
        (movie) => movie.movieId === data.id
      );
      if (selectedMovie) {
        handleMovieDelete(selectedMovie._id);
      }
    } else {
      mainApi
        .saveMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при сохранении фильма ${err}`));
    }
  }

  function logOut() {
    localStorage.clear();
    localStorage.removeItem("JWT");
    setIsLoggedIn(false);
    localStorage.removeItem("movie");
    localStorage.removeItem("shorts");
    localStorage.removeItem("allmovies");
    setCurrentUser({
      name: "",
      email: "",
    });
  }

  return (
    <>
      {isTokenChecked ? (
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Main isLoggedIn={isLoggedIn} />
                    </>
                  }
                />

                <Route
                  path="/movies"
                  element={
                    <>
                      <Header isLoggedIn={isLoggedIn} />
                      <ProtectedRoute
                        isLoggedIn={isLoggedIn}
                        element={Movies}
                        onSaveOrDelete={handleSaveOrDelete}
                        savedMovies={savedMovies}
                        name="movies"
                        onDelete={handleMovieDelete}
                      />
                      <Footer />
                    </>
                  }
                />

                <Route
                  path="/saved-movies"
                  element={
                    <>
                      <Header isLoggedIn={isLoggedIn} />
                      <ProtectedRoute
                        isLoggedIn={isLoggedIn}
                        element={SavedMovies}
                        onDelete={handleMovieDelete}
                        savedMovies={savedMovies}
                      />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <>
                      <Header isLoggedIn={isLoggedIn} />
                      <ProtectedRoute
                        isLoggedIn={isLoggedIn}
                        element={Profile}
                        onEditProfile={handleEditProfile}
                        handleLogOut={logOut}
                        isSending={isRequestSending}
                        isLoading={isLoading}
                      />
                    </>
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login
                      isLoggedIn={isLoggedIn}
                      handleAuthUser={handleAuthUser}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Register
                      isLoggedIn={isLoggedIn}
                      handleRegister={handleRegisterUser}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />
                <Route path="*" element={<ErrorNotFound />} />
              </Routes>
              <InfoTooltip
                title={infoTooltipTitle}
                isOpen={infoToolTipPopupOpen}
                onClose={closeAllPopups}
                isSuccess={isSuccess}
              />
            </div>
          </div>
        </CurrentUserContext.Provider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
