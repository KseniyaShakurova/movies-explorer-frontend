import "./Movies.css";
import { useEffect, useState, useCallback } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import MAX_SHORT_DURATION from "../../utils/constant";

function Movies({ onSaveOrDelete, savedMovies, name, onDelete }) {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedSearch, setSavedSearch] = useState("");
  const [serverError, setServerError] = useState(false);
  const [initialSearch, setInitialSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const filter = useCallback((search, checked, movies) => {
    setSavedSearch(search);
    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(checked));
    localStorage.setItem("allmovies", JSON.stringify(movies));
    setFilteredMovies(
      movies.filter((movie) => {
        const searchName =
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase());

        return checked
          ? searchName && movie.duration <= MAX_SHORT_DURATION
          : searchName;
      })
    );
  }, []);

  const getingFilms = (search) => {
    if (allMoviesData.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMoviesData(res);
          setServerError(false);
          setInitialSearch(false);
          filter(search, checked, res);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибкак при поске фильмов ${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      filter(search, checked, allMoviesData);
    }
  };

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies) || [];
      const search = JSON.parse(localStorage.movie || " ");
      const checked = JSON.parse(localStorage.shorts) || false;
      setServerError(false);
      setInitialSearch(false);
      setSavedSearch(search);
      setChecked(checked);
      setAllMoviesData(movies);
      filter(search, checked, movies);
    }
  }, [filter]);

  return (
    <main className="movies">
      <SearchForm
        savedSearch={savedSearch}
        getingFilms={getingFilms}
        moviesData={allMoviesData}
        setChecked={setChecked}
        filter={filter}
        initialSearch={initialSearch}
        checked={checked}
        name={name}
      />
      <MoviesCardList
        name="movies"
        cards={filteredMovies}
        onSaveOrDelete={onSaveOrDelete}
        savedMovies={savedMovies}
        isLoading={isLoading}
        serverError={serverError}
        initialSearch={initialSearch}
        isSavedMovies={false}
        onDelete={onDelete}
      />
    </main>
  );
}

export default Movies;
