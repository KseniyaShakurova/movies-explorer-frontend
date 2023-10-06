import "./MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger({ onClose, isMenu }) {
  return (
    <section className={`menu ${isMenu && "menu_opened"}`}>
      <div className="menu__popup">
        <button
          className="menu__button"
          type="button"
          onClick={onClose}
        ></button>
        <nav className="menu__popup-content">
          <ul className="menu__popup-list">
            <li className="menu__popup-item">
              <Link to="/" className="menu__popup-link" onClick={onClose}>
                Главная
              </Link>
            </li>
            <li className="menu__popup-item">
              <Link
                to="/movies"
                className="menu__popup-link menu__popup-link-line"
                onClick={onClose}
              >
                Фильмы
              </Link>
            </li>
            <li className="menu__popup-item">
              <Link to="/saved-movies" className="menu__popup-link" onClick={onClose}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <div className="menu__popup-footer">
            <Link to="/profile" className="menu__popup-account" onClick={onClose}>
              Аккаунт
              <div className="menu__popup-btn"></div>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default MenuBurger;
