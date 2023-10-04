import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a
            className="portfolio__link"
            href="https://github.com/KseniyaShakurova/how-to-learn"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__links-item">
          <a
            className="portfolio__link"
            href="https://github.com/KseniyaShakurova/russian-travel"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__links-item portfolio__links-item_none-border">
          <a
            className="portfolio__link"
            href="https://github.com/KseniyaShakurova/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
