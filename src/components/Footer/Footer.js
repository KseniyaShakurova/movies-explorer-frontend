import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <nav className="footer__list">
        <ul className="footer__links">
          <li className="footer__item">
            <Link
              className="footer__link"
              to="https://practicum.yandex.ru/"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__item">
            <Link
              className="footer__link"
              to="https://github.com/KseniyaShakurova"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
        <p className="footer__copyright">©2023</p>
      </nav>
    </footer>
  );
}

export default Footer;
