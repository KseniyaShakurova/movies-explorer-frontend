import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logoheader.svg";
import "./Header.css";
import { useLocation } from "react-router-dom";
import MenuBurger from "../MenuBurger/MenuBurger";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  function handleiIsMenu() {
    setIsMenu(!isMenu);
  }
  const headerLoginIn = (
    <>
      <Navigation />
      <div className="header__menu" onClick={handleiIsMenu}></div>
      <MenuBurger onClose={handleiIsMenu} isMenu={isMenu} />
    </>
  );
  return (
    <header
      className={`${
        location.pathname === "/" ? "header" : "header_color"
      } header`}
    >
      <Link to="/" className="header__logo">
        <img src={logo} className="header__img" alt="логотип" />
      </Link>
      {isLoggedIn ? headerLoginIn : <HeaderAuth />}
    </header>
  );
}

export default Header;
