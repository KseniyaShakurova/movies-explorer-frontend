import "./Techs.css";

function Techs() {
  return (
    <section className="techno">
      <h2 className="techno__header">Технологии</h2>
      <div className="techno__text">
        <h3 className="techno__title">7 технологий</h3>
        <p className="techno__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techno__table">
          <li className="techno__item">HTML</li>
          <li className="techno__item">CSS</li>
          <li className="techno__item">JS</li>
          <li className="techno__item">REACT</li>
          <li className="techno__item">GIT</li>
          <li className="techno__item">Express.js</li>
          <li className="techno__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
