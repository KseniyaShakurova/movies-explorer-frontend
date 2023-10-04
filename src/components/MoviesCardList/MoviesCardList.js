import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ film }) {
  return (
    <section className="moviescard">
      <ul className="moviescard__list">
        {film.map((film) => (
          <MoviesCard key={film.id} film={film} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
