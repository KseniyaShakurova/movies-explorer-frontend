import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="header__list">
      <nav className="header__item">
        <Link to="/movies" className="header__links" target="_blank">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__links" target="_blank">
          Сохранённые фильмы
        </Link>
      </nav>
      <div className="header__account">
        <Link to="/profile" className="header__links" target="_blank">
          Аккаунт
        </Link>
        <Link to="/profile">
          <button className="header__button" type="button"></button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
