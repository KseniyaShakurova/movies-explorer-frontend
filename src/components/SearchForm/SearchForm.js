import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect } from "react";
import useValidation from "../../utils/useValidation";

function SearchForm({
  savedMovies,
  checked,
  getingFilms,
  initialSearch,
  moviesData,
  setChecked,
  filter,
  name,
}) {
  const { values, handleChange, resetForm } = useValidation ();

  useEffect(() => {
    const savedSearch = localStorage.getItem("searchInputValue");
    if (savedSearch && name === "movies") {
      resetForm({ searchInput: savedSearch });
    } else {
      resetForm({ searchInput: "" });
    }
  }, [resetForm, name]);

  function switchTumbler() {
    if (checked) {
      setChecked(false);
      filter(values.searchInput, false, moviesData);
    } else {
      setChecked(true);
      filter(values.searchInput, true, moviesData);
    }
    if (name === "movies") {
      localStorage.setItem("searchInputValue", values.searchInput || "");
    }
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const searchInputValue = evt.target.searchInput.value;
    getingFilms(evt.target.searchInput.value);
    if (searchInputValue && name === "movies") {
      localStorage.setItem("searchInputValue", searchInputValue);
    }
  }

  return (
    <section className="searchform">
      <form className="searchform__form" noValidate onSubmit={onSubmit}>
        <input
          className="searchform__input"
          placeholder="Фильм"
          type="text"
          name="searchInput"
          id="searchInput"
          required
          value={values.searchInput || ""}
          minLength={1}
          maxLength={30}
          pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
          onChange={(evt) => {
            handleChange(evt);
          }}
        />
        <button type="submit" className="searchform__button">
          Поиск
        </button>
      </form>
      <FilterCheckbox
        switchTumbler={switchTumbler}
        initialSearch={initialSearch}
        checked={checked}
      />
    </section>
  );
}

export default SearchForm;
