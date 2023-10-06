import React from "react";
import "../App/App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="page">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={false} isLoggedin={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header loggedIn={true} isLoggedin={loggedIn} />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header loggedIn={true} isLoggedin={loggedIn} />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header loggedIn={true} isLoggedin={loggedIn} />
                <Profile />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
