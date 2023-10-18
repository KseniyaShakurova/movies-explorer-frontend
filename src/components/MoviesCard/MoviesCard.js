import "./MoviesCard.css";
import { useEffect, useState } from "react";

function MoviesCard({
  name,
  movieData,
  savedMovies,
  onSaveOrDelete,
  onDelete,
  isSavedMovies,
}) {
  const [clicked, setClicked] = useState(false);
  const { nameRU, duration, trailerLink } = movieData;

  const imageUrl = `${
    name === "movies"
      ? `https://api.nomoreparties.co${movieData.image.url}`
      : movieData.image
  }`;

  useEffect(() => {
    if (name === "movies")
      setClicked(
        savedMovies.some((element) => movieData.id === element.movieId)
      );
  }, [savedMovies, movieData.id, setClicked, name]);

  function onClick() {
    if (savedMovies.some((element) => movieData.id === element.movieId)) {
      setClicked(false);
      onSaveOrDelete(movieData);
    } else {
      setClicked(false);
      onSaveOrDelete(movieData);
    }
  }

  function getMovieDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  return (
    <div className="moviescard__item">
      <div className="moviescard__info">
        <h2 className="moviescard__title">{nameRU}</h2>
        <p className="moviescard__time">
          {getMovieDuration(duration)}
        </p>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img
          className="moviescard__img"
          src={imageUrl}
          alt={nameRU}
        />
      </a>
      {name === "movies" ? (
        <div className="moviescard__buttons">
          {!clicked ? (
            <button
              className="moviescard__button"
              type="button"
              onClick={() => {
                !onClick || isSavedMovies
                  ? onDelete(movieData._id ? movieData._id : movieData._id)
                  : onSaveOrDelete(movieData);
              }}
            >
              Сохранить
            </button>
          ) : (
            <button
              className=" moviescard__button moviescard__button_active"
              type="button"
              onClick={() => {
                !onClick || isSavedMovies
                  ? onDelete(movieData._id ? movieData._id : movieData._id)
                  : onSaveOrDelete(movieData);
              }}
            ></button>
          )}
        </div>
      ) : (
        <button
          className="moviescard__button moviescard__button_delete"
          type="button"
          aria-label="Удалить"
          onClick={() => onDelete(movieData._id)}
        ></button>
      )}
    </div>
  );
}

export default MoviesCard;
