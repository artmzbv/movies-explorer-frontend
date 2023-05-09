import React from "react"
import './Header.css'
import logo from '../../images/logo.svg'
import {Link, BrowserRouter} from "react-router-dom"

function Header() {
// function Account(){
//     return(
//     //Функция на случай, если пользователь авторизовался
//         <BrowserRouter>
//         <Link className="header__path header__path_account" to="/profile">Аккаунт</Link>
//         </BrowserRouter>)
// }
    return (
        <header className='header'>
        <img className='header__logo' src={logo} alt="Логотип" />
        <div className="header__navigation">
        <Link className="header__path" to="/signup">Регистрация</Link>
        <Link className="header__path header__path_login" to="/signin">Войти</Link>
        </div>
        </header>
    )
}

export default Header