import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoheader.svg";
import useValidation from "../../utils/useValidation";
import { useEffect } from "react";

function Register({ handleRegister }) {
  const { values, errors, handleChange, isValid, resetForm } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    handleRegister(values.name, values.email, values.password);
  }

  return (
    <main className="form">
      <Link to="/" className="form__links">
        <img className="form__logo" src={logo} alt="логотип" />
      </Link>
      <h1 className="form__title">Добро пожаловать!</h1>
      <form className="form__conteiner" onSubmit={handleSubmit} noValidate>
        <div className="form__item">
          <label className="form__label">Имя</label>
          <input
            className={`form__input ${
              !isValid && errors.name ? "form__input-error" : ""
            }`}
            name="name"
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            value={values.name || ""}
          />
          <span
            className={`form__span-active ${
              !isValid && errors.name ? "form__span" : ""
            }`}
          >
            {" "}
            {errors.name || ""}
          </span>
        </div>
        <div className="form__item">
          <label className="form__label">E-mail</label>
          <input
            className={`form__input ${
              !isValid && errors.email ? "form__input-error" : ""
            }`}
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="E-mail"
            required
            value={values.email || ""}
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
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
            id="password"
            placeholder="Пароль"
            minLength={8}
            maxLength={30}
            required
            autoComplete="new-password"
            onChange={handleChange}
            value={values.password || ""}
          />
          <span
            className={`form__span-active ${
              !isValid && errors.password ? "form__span" : ""
            }`}
          >
            {errors.password || ""}
          </span>
        </div>
        <div className="form__element">
          <button
            className={`form__button ${
              !isValid && errors ? "form__button-disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <div className="form__text">
            <p className="form__subtitle">Уже зарегистрированы?</p>
            <Link className="form__link" to="/signin">
              Войти
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Register;
