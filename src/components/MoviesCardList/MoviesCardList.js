import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  NUMBER_CARDS_SCREEN_1280,
  NUMBER_CARDS_SCREEN_768,
  NUMBER_CARDS_SCREEN_320,
  PAGINATION_CARDS,
} from "../../utils/constant";

function MoviesCardList({
  name,
  initialSearch,
  serverError,
  isLoading,
  cards,
  onDelete,
  onSaveOrDelete,
  savedMovies,
  isSavedMovies,
}) {
  const { pathname } = useLocation();
  const [seeMoviesCards, setSeeMoviesCards] = useState(0);

  useEffect(() => {
    const updateSeeMovies = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setSeeMoviesCards(NUMBER_CARDS_SCREEN_1280);
      } else if (screenWidth >= 768) {
        setSeeMoviesCards(NUMBER_CARDS_SCREEN_768);
      } else if (screenWidth >= 480) {
        setSeeMoviesCards(NUMBER_CARDS_SCREEN_320);
      } else {
        setSeeMoviesCards(NUMBER_CARDS_SCREEN_320);
      }
    };

    updateSeeMovies();
    window.addEventListener("resize", updateSeeMovies);

    return () => {
      window.removeEventListener("resize", updateSeeMovies);
    };
  }, []);

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setSeeMoviesCards(seeMoviesCards + PAGINATION_CARDS);
    } else if (screenWidth >= 768) {
      setSeeMoviesCards(seeMoviesCards + PAGINATION_CARDS - 1);
    } else if (screenWidth >= 480) {
      setSeeMoviesCards(seeMoviesCards + PAGINATION_CARDS - 1);
    } else {
      setSeeMoviesCards(seeMoviesCards + PAGINATION_CARDS - 1);
    }
  };

  return (
    <section className="moviescard" aria-label="Галерея">
      <ul className="moviescard__list">
        {isLoading ? (
          <Preloader />
        ) : name === "movies" && cards.length !== 0 ? (
          cards.slice(0, seeMoviesCards).map((movieData) => {
            return (
              <li className="moviescard__list-item" key={movieData.id}>
                <MoviesCard
                  movieData={movieData}
                  name={name}
                  savedMovies={savedMovies}
                  onSaveOrDelete={onSaveOrDelete}
                  isSavedMovies={isSavedMovies}
                  onDelete={onDelete}
                />
              </li>
            );
          })
        ) : name === "saved-movies" && cards.length !== 0 ? (
          cards.map((movieData) => {
            return (
              <li className="moviescard__list-item" key={movieData._id}>
                <MoviesCard
                  movieData={movieData}
                  name={name}
                  savedMovies={savedMovies}
                  onDelete={onDelete}
                />
              </li>
            );
          })
        ) : serverError ? (
          <p className="moviescard__warning">Ошибка. Попробуйте еще раз.</p>
        ) : !initialSearch ? (
          <p className="moviescard__warning">Поиск не дал результатов</p>
        ) : pathname === "/movies" ? (
          <p className="moviescard__warning">Введите ключевое слово</p>
        ) : (
          <p className="moviescard__warning">Сохраненных фильмов нет</p>
        )}
      </ul>

      <div className="movies__button">
        {name === "movies" &&
          !initialSearch &&
          seeMoviesCards < cards.length && (
            <button
              onClick={handleShowMore}
              className="movies__btn"
              type="button"
            >
              Ещё
            </button>
          )}
      </div>
    </section>
  );
}

export default MoviesCardList;
