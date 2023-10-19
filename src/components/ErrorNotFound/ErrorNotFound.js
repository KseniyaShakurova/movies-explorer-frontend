import "./ErrorNotFound.css";
import { Link, useNavigate } from "react-router-dom";

function ErrorNotFound() {

  const location = useNavigate();
    function goBack() {
      location(-1);
    }

  return (
    <main className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">Страница не найдена</p>
      <Link className="error__link" onClick={goBack}>
        Назад
      </Link>
    </main>
  );
}

export default ErrorNotFound;
