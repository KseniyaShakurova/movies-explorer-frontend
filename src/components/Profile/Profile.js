import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useValidation from "../../utils/useValidation";

function Profile({ isLoggedIn, onEditProfile, handleLogOut }) {
  const { isValid } = useValidation();
  const currentUser = useContext(CurrentUserContext);
  const [data, setData] = useState({
    email: currentUser.email,
    name: currentUser.name,
  });
  
  const [isActiveEdit, setActiveEdit] = useState(false);
  const [isActiveSave, setActiveSave] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isLoggedIn) {
      setData({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser.name, currentUser.email, isLoggedIn]);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: target.validationMessage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name } = data;
    onEditProfile({ email, name });
  };

  const isVision =
    currentUser.name === data.name && currentUser.email === data.email;

  function handleIsActive() {
    setActiveEdit(!isActiveEdit);
    setActiveSave(!isActiveSave);
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__info">
            <label className="profile__span">Имя</label>
            <input
              className="profile__input"
              name="name"
              type="text"
              id="name"
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              required
              value={data.name ? data.name : ""}
              onChange={handleChange}
              disabled={!isActiveEdit}
              pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
            />
          </div>
          <span
            className={`profile__span ${
              !isValid && errors.name ? "profile__span-active" : ""
            }`}
            id="email-error"
          >
            {errors.name || ""}
          </span>
          <div className="profile__info profile__info_line">
            <label className="profile__span">E-mail</label>
            <input
              className="profile__input"
              id="email"
              name="email"
              type="email"
              required
              value={data.email ? data.email : ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              placeholder="E-mail"
              disabled={!isActiveSave}
              pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
            />
          </div>
          <span
            className={`profile__span  ${
              !isValid && errors.email ? "profile__span-active" : ""
            }`}
            id="email-error"
          >
            {errors.email || ""}
          </span>
          <div className="profile__buttons">
            <button
              className={
                !isActiveEdit
                  ? "profile__btn"
                  : "profile__btn profile__btn-disabled"
              }
              type="button"
              onClick={handleIsActive}
            >
              Редактировать профиль
            </button>

            <button
              className={
                isActiveSave
                  ? !isVision
                    ? "profile__btn-save"
                    : "profile__btn-save profile__btn-save-nonActive"
                  : "profile__btn-save profile__btn-save-disabled"
              }
              type="submit"
              disabled={isVision}
              onClick={handleIsActive}
            >
              Сохранить
            </button>

            <Link to="/" className="profile__link" onClick={handleLogOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;
