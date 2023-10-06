import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoheader.svg";

function Login() {
  return (
    <main  class="form">
      <Link to="/" className="form__links">
        <img class="form__logo" src={logo} alt="логотип" />
      </Link>
      <h1 class="form__title">Рады видеть!</h1>
      <form class="form__conteiner">
        <div class="form__item">
          <label class="form__label">E-mail</label>
          <input
            class="form__input"
            name="email"
            type="email"
            id="email"
            required
            placeholder="E-mail"
          />
          <span className="form__span"></span>
        </div>
        <div class="form__item">
          <label class="form__label">Пароль</label>
          <input
            class="form__input"
            name="password"
            type="password"
            minLength={8}
            maxLength={30}
            required
            placeholder="Пароль"
          />
          <span className="form__span"></span>
        </div>
      </form>
      <div class="form__element-login">
        <button class="form__button" type='submit'>Войти</button>
        <div class="form__text">
          <p class="form__subtitle">Ещё не зарегистрированы?</p>
          <Link class="form__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
