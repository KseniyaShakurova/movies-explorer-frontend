import "./HeaderAuth.css";
import { Link } from "react-router-dom";

function HeaderAuth() {
  return (
    <nav className="header__item">
      <Link to="/signup" className="header__signup">
        Регистрация
      </Link>
      <Link to="/signin" className="header__signup header__signup_entrance">
        Войти
      </Link>
    </nav>
  );
}

export default HeaderAuth;
