import avatar from "../../images/avatar.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="aboutme__header">Студент</h3>
      <div className="aboutme__container">
        <img className="aboutme__avatar" src={avatar} alt="фото автора" />
        <div className="aboutme__info">
          <h2 className="aboutme__name">Ксения</h2>
          <p className="aboutme__job">Фронтенд-разработчик, 34года</p>
          <p className="aboutme__text">
            Я родилась в маленьком, но очень зеленом городке Димитровграде. Живу
            сейчас в Королеве. Закончила НИЯУ МИФИ. Очень люблю читать. 10 лет
            назад уже получила техническое образование по специальности
            программное обеспечение и вычислительная техника, но по профессии не
            работала. В 2022 году решила наверстать упущенное, получить новые
            знания и навыки и найти себя в веб-разрабоке.
          </p>
          <a
            className="aboutme__link"
            href="https://github.com/KseniyaShakurova"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
