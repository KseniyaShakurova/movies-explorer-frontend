import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoheader.svg";

function Login() {
  return (
    <section class="form">
      <Link to="/">
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
            placeholder="E-mail"
            required
          />
        </div>
        <div class="form__item">
          <label class="form__label">Пароль</label>
          <input
            class="form__input form__input_color"
            name="password"
            type="password"
            placeholder="Пароль"
            minLength={8}
            maxLength={30}
            required
          />
        </div>
      </form>
      <div class="form__element">
        <button class="form__button">Войти</button>
        <div class="form__text">
          <p class="form__subtitle">Ещё не зарегистрированы?</p>
          <Link class="form__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
