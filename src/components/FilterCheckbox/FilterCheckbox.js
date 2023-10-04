import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__label">
        <input type="checkbox" className="filterCheckbox__input" />
        <span className="filterCheckbox__switch"></span>
      </label>
      <p className="filterCheckbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
