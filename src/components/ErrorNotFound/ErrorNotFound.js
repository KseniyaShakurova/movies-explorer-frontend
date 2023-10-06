import "./ErrorNotFound.css";
import { Link } from "react-router-dom";

function ErrorNotFound() {
  return (
    <main className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__link">
        Назад
      </Link>
    </main>
  );
}

export default ErrorNotFound;
