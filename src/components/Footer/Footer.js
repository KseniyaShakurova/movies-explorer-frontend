import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__list">
        <nav className="footer__links">
          <Link
            className="footer__link"
            to="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            to="https://github.com/KseniyaShakurova"
            target="_blank"
          >
            Github
          </Link>
        </nav>
        <p className="footer__copyright">©2023</p>
      </div>
    </footer>
  );
}

export default Footer;
