import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__info">
        <span className="profile__span">Имя</span>
        <input
          className="profile__input"
          type="text"
          value="Виталий"
          minLength="2"
          maxLength="30"
        />
      </div>
      <div className="profile__info profile__info_line">
        <span className="profile__span">E-mail</span>
        <input
          className="profile__input"
          type="text"
          value="pochta@yandex.ru"
          minLength="2"
          maxLength="30"
        />
      </div>
      <div className="profile__buttons">
        <button className="profile__btn" type="button">
          Редактировать
        </button>
        <button className="profile__btn profile__btn_red" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
