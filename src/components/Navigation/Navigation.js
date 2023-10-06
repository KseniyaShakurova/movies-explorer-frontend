import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="header__list">
      <ul className="header__item">
        <li><Link to="/movies" className="header__links">
          Фильмы
        </Link></li>
        <li>
        <Link to="/saved-movies" className="header__links">
          Сохранённые фильмы
        </Link>
        </li>
      </ul>
      <div className="header__account">
        <Link to="/profile" className="header__links">
          Аккаунт
          <div className="header__button"></div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
