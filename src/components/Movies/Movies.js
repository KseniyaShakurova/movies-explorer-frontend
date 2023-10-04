import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import film from "../../utils/constant";

function Movies() {
  return (
    <>
      <main className="movies">
        <SearchForm />
        <MoviesCardList film={film} />
        <div className="movies__button">
          <button className="movies__btn">Ещё</button>
        </div>
      </main>
    </>
  );
}

export default Movies;
