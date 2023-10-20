import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <Link
            target="_blank"
            className="portfolio__link"
            to="https://github.com/KseniyaShakurova/how-to-learn"
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link
            target="_blank"
            className="portfolio__link"
            to="https://github.com/KseniyaShakurova/russian-travel"
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__links-item portfolio__links-item_none-border">
          <Link
            target="_blank"
            className="portfolio__link"
            to="https://github.com/KseniyaShakurova/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
