import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import saveFilms from "../../utils/saveFilms";

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList film={saveFilms} />
    </main>
  );
}

export default SavedMovies;
