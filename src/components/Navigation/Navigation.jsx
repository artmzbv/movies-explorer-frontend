import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css"
import logo from "../../images/logo.svg"
import menu from "../../images/menu.svg"

function Navigation({ setIsOpened }) {
    function handleOpen() {
        setIsOpened(true);
      }    
    
    return(
        <nav className="navigation">
        <div className="navigation__menu">
        <img src={logo} alt="логотип" className="navigation__logo"/>
        <NavLink to="/movies" className="navigation__film">Фильмы</NavLink>
        <NavLink to="/saved" className="navigation__film">Сохраненные фильмы</NavLink>
        </div>
        <NavLink to="/profile" className="navigation__account">Аккаунт</NavLink>
        <button
        onClick={handleOpen}
        type="menu"
        className="navigation__burger"
        >
        <img src={menu} alt="меню" />
        </button>
        </nav>
    )
}

export default Navigation