import "./FilterCheckbox.css";

function FilterCheckbox({ switchTumbler, initialSearch, checked }) {
  return (
    <div className="filterCheckbox">
      <div className="filterCheckbox__form">
        <label className="filterCheckbox__label">
          <input
            type="checkbox"
            className="filterCheckbox__input"
            name="filterCheckbox"
            id="filterCheckbox"
            checked={checked}
            onChange={() => switchTumbler()}
            disabled={initialSearch}
          />
          <span className="filterCheckbox__switch"></span>
        </label>
      </div>
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
