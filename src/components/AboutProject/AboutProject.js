import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="intro" id="intro">
      <h2 className="intro__header">О проекте</h2>
      <div className="intro__container">
        <div className="intro__info">
          <h3 className="intro__title">Дипломный проект включал 5 этапов</h3>
          <p className="intro__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="intro__info">
          <h3 className="intro__title">На выполнение диплома ушло 5 недель</h3>
          <p className="intro__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="intro__time">
        <div className="intro__item">
          <h4 className="intro__time-title intro__time-title-back">1 неделя</h4>
          <p className="intro__time-subtitle">Back-end</p>
        </div>
        <div className="intro__item">
          <h4 className="intro__time-title intro__time-title-front">
            4 недели
          </h4>
          <p className="intro__time-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
