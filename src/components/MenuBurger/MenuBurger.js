import "./MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger({ onClose, isMenu }) {
  return (
    <section className={`menu__popup ${isMenu && "menu__opened"}`}>
      <div className="menu__popup_conteiner">
        <button
          className="menu__button_close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="menu__conteiner">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__link" onClick={onClose}>
                Главная
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/movies"
                className="menu__link menu__link_line"
                onClick={onClose}
              >
                Фильмы
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/saved-movies" className="menu__link" onClick={onClose}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <div className="menu__footer">
            <Link to="/profile" className="menu__account" onClick={onClose}>
              Аккаунт
            </Link>
            <Link to="/profile" onClick={onClose}>
              <button className="menu__btn" type="button"></button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuBurger;
