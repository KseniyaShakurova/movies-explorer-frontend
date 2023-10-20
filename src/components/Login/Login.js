import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoheader.svg";
import useValidation from "../../utils/useValidation";
import { useEffect } from "react";

function Login({ handleAuthUser }) {
  const { values, errors, handleChange, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    handleAuthUser(values.email, values.password);
  }

  return (
    <main className="form">
      <Link to="/" className="form__links">
        <img className="form__logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="form__title">Рады видеть!</h1>
      <form className="form__conteiner" onSubmit={handleSubmit} noValidate>
        <div className="form__item">
          <label className="form__label">E-mail</label>
          <input
            className={`form__input ${
              !isValid && errors.email ? "form__input-error" : ""
            }`}
            name="email"
            type="email"
            id="email"
            required
            placeholder="E-mail"
            value={values.email || ""}
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
            onChange={handleChange}
          />
          <span
            className={`form__span-active ${
              !isValid && errors.email ? "form__span" : ""
            }`}
          >
            {errors.email || ""}
          </span>
        </div>
        <div className="form__item">
          <label className="form__label">Пароль</label>
          <input
            className={`form__input ${
              !isValid && errors.password ? "form__input-error" : ""
            }`}
            name="password"
            type="password"
            minLength={8}
            maxLength={30}
            required
            value={values.password || ""}
            placeholder="Пароль"
            autoComplete="new-password"
            onChange={handleChange}
          />
          <span
            className={`form__span-active ${
              !isValid && errors.password ? "form__span" : ""
            }`}
          >
            {errors.password || ""}
          </span>
        </div>
        <div className="form__element-login">
          <button
            className={`form__button ${
              !isValid && errors ? "form__button-disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
          <div className="form__text">
            <p className="form__subtitle">Ещё не зарегистрированы?</p>
            <Link className="form__link" to="/signup">
              Регистрация
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Login;
