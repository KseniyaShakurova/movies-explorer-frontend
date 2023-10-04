import logoPromo from "../../images/promo-logo.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="lead">
      <img
        src={logoPromo}
        alt="логотип повторящиеся слова"
        className="lead__logo"
      />
      <div className="lead__about">
        <h1 className="lead__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="lead__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="lead__button" type="button">
          Узнать больше
        </button>
      </div>
    </section>
  );
}

export default Promo;
