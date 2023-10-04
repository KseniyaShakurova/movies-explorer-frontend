import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoheader.svg";

function Register() {
  return (
    <section className="form">
      <Link to="/">
        <img className="form__logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="form__title">Добро пожаловать!</h1>
      <form className="form__conteiner">
        <div className="form__item">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            name="text"
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            name="email"
            type="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label">Пароль</label>
          <input
            className="form__input form__input_color"
            name="password"
            type="password"
            id="password"
            minLength={8}
            maxLength={30}
            required
          />
          <span className="form__span">Что-то пошло не так...</span>
        </div>
      </form>
      <div className="form__element">
        <button className="form__button">Зарегистрироваться</button>
        <div className="form__text">
          <p className="form__subtitle">Уже зарегистрированы?</p>
          <Link className="form__link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
