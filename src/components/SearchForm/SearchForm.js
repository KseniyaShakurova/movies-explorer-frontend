import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form">
        <input
          className="searchform__input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button type="submit" className="searchform__button">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
