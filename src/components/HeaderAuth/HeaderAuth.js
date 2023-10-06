import "./HeaderAuth.css";
import { Link } from "react-router-dom";

function HeaderAuth() {
  return (
    <nav className="header__item">
      <Link to="/signup" className="header__link">
        Регистрация
      </Link>
      <Link to="/signin" className="header__link header__link_entrance">
        Войти
      </Link>
    </nav>
  );
}

export default HeaderAuth;
