import "./ErrorNotFound.css";
import { Link } from "react-router-dom";

function ErrorNotFound() {
  return (
    <section className="error">
      <h2 className="error__code">404</h2>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__link">
        Назад
      </Link>
    </section>
  );
}

export default ErrorNotFound;
