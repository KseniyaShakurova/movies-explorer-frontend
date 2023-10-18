import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect, useCallback } from "react";
import MAX_SHORT_DURATION from "../../utils/constant";

function SavedMovies({ savedMovies, onDelete }) {
  const [filteringFilms, setFilteringFilms] = useState(savedMovies);
  const [savedSearch, setSavedSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);
  
  const filter = useCallback((search, checked, movies) => {
    setSavedSearch(search);
    setFilteringFilms(
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

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntrance(true);
    } else {
      setFirstEntrance(false);
    }
    filter(savedSearch, checked, savedMovies);
  }, [filter, savedMovies, checked, savedSearch]);

  function getingFilms(search) {
    setFirstEntrance(false);
    setSavedSearch(search);
    filter(search, checked, savedMovies);
  }

  return (
    <main>
      <SearchForm
        checked={checked}
        getingFilms={getingFilms}
        savedSearch={savedSearch}
        firstEntrance={firstEntrance}
        savedMovies={savedMovies}
        moviesData={savedMovies}
        filter={filter}
        setChecked={setChecked}
      />
      <MoviesCardList
        name="saved-movies"
        cards={filteringFilms}
        onDelete={onDelete}
        isSavedMovies={true}
      />
    </main>
  );
}

export default SavedMovies;
