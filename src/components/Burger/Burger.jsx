import React from "react";
import { NavLink } from "react-router-dom";

import "./Burger.css"
import exit from "../../images/exit.svg"

function Burger({isOpened, popupMenuClosed}){
    // const burgerOpened = isOpened ? "burger__menu" : "burger__menu_hidden {burgerOpened};
    return(
        <section className={isOpened ? "burger__menu" : "burger__menu_hidden"}>
        <div className="burger__opacity">
         <button className="burger__button" type="button" onClick={popupMenuClosed}><img src={exit} alt="закрыть"/></button>
        <div className="burger__container">
        <div className="burger__content">
        <NavLink to="/" className="burger__link" onClick={popupMenuClosed}>Главная</NavLink>
        <NavLink to="/movies" className="burger__link" onClick={popupMenuClosed}>Фильмы</NavLink>
        <NavLink to="/saved" className="burger__link" onClick={popupMenuClosed}>Сохраненные фильмы</NavLink>
        </div>
        <NavLink to="/profile" className="burger__account" onClick={popupMenuClosed}>Аккаунт</NavLink>
        </div>
        </div>
        </section>
    )
}



export default Burger
