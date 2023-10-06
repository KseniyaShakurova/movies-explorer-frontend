import avatar from "../../images/avatarfoto.png";
import "./AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__header">Студент</h2>
      <div className="aboutme__container">
        <img className="aboutme__avatar" src={avatar} alt="фото автора" />
        <div className="aboutme__info">
          <h3 className="aboutme__name">Ксения</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 34года</p>
          <p className="aboutme__text">
            Я родилась в маленьком, но очень зеленом городке Димитровграде. Живу
            сейчас в Королеве. Закончила НИЯУ МИФИ. Очень люблю читать. 10 лет
            назад уже получила техническое образование по специальности
            программное обеспечение и вычислительная техника, но по профессии не
            работала. В 2022 году решила наверстать упущенное, получить новые
            знания и навыки и найти себя в веб-разработке.
          </p>
          <Link
            target="_blank"
            className="aboutme__link"
            to="https://github.com/KseniyaShakurova"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
