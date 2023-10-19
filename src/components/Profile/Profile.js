import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { validateMail, validateName } from "../../utils/validateProfile";

function Profile({ isLoggedIn, onEditProfile, handleLogOut }) {
  
  const currentUser = useContext(CurrentUserContext);
  const [data, setData] = useState({
    email: currentUser.email,
    name: currentUser.name,
  });
  
  
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setData({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser.name, currentUser.email, isLoggedIn]);

  

  const [isActiveEdit, setActiveEdit] = useState(false);
  const [isActiveSave, setActiveSave] = useState(false);
  
  const [isValidName, setisValidName] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
    if (name === 'name') {
      setisValidName(validateName(target, name, value));
      setIsValidEmail(true)
    } else if (name === 'email') {
      setIsValidEmail(validateMail(target, name, value));
      setisValidName(true)
    }
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

  useEffect(() => {
    if (isValidEmail && isValidName) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isValidEmail, isValidName])

  useEffect(() => {
    if ((currentUser.name === data.name) && (currentUser.email === data.email)) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [currentUser, data])


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
              placeholder="Имя"
              required
              value={data.name || " "}
              onChange={handleChange}
              disabled={!isActiveEdit}
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
              value={data.email || " "}
              onChange={handleChange}
              placeholder="E-mail"
              disabled={!isActiveSave}
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
                  ? isValid
                    ? "profile__btn-save"
                    : "profile__btn-save profile__btn-save-nonActive"
                  : "profile__btn-save profile__btn-save-disabled"
              }
              type="submit"
              disabled={!isValid}
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




