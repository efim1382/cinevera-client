import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.css";

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.logo}>
        <h1>SearchFilm</h1>
      </NavLink>
    </header>
  );
};

export default Header;
