import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
      <div className="profile__info">
        <span className="profile__span">Имя</span>
        <input
          className="profile__input"
          type="text"
          defaultValue="Виталий"
          minLength="2"
          maxLength="30"
          placeholder="Имя"
        />
      </div>
      <div className="profile__info profile__info_line">
        <span className="profile__span">E-mail</span>
        <input
          className="profile__input"
          type="text"
          defaultValue="pochta@yandex.ru"
          minLength="2"
          maxLength="30"
          placeholder="E-mail"
        />
      </div>
      </form>
      <div className="profile__buttons">
        <button className="profile__btn" type="button">
          Редактировать
        </button>
        <Link to="/" className="profile__link">
            Выйти из аккаунта
        </Link>
      </div>
      
    </main>
  );
}

export default Profile;
