import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard({ film }) {
  const [saveMovies, setSaveMovies] = useState(false);

  function handleClick() {
    setSaveMovies(!saveMovies);
  }

  const { pathname } = useLocation();

  return (
    <li className="moviescard__item">
      <div className="moviescard__info">
        <h2 className="moviescard__title">{film.name}</h2>
        <p className="moviescard__time">{film.time}</p>
      </div>
      <img className="moviescard__img" src={film.foto} alt="film.name" />
      {pathname === "/movies" ? (
        <div className="moviescard__buttons">
          {!saveMovies ? (
            <button className="moviescard__button" onClick={handleClick}>
              Сохранить
            </button>
          ) : (
            <button
              className="moviescard__button moviescard__button_active"
              onClick={handleClick}
            ></button>
          )}
        </div>
      ) : (
        <button
          className="moviescard__button moviescard__button_delete"
          onClick={handleClick}
        ></button>
      )}
    </li>
  );
}

export default MoviesCard;
