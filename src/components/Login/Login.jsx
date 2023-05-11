import "./Login.css"
import logo from '../../images/logo.svg'
import { NavLink } from "react-router-dom"

function Login(){
    return(
        <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <h1 className="login__welcome">Рады видеть!</h1>
        <p className="login__input-name">E-mail</p>
        <input className="login__input"
        type="email"
        name="email"
        required />
        <p className="login__input-name">Пароль</p>
        <input className="login__input"
        type="password"
        name="password"
        required/>
        <button className="login__signin-block">
        <p className="login__signin-text">Войти</p>
        </button>
        <div className="login__signedup">
        <p className="login__signedup-question">Еще не зарегистрированы?</p>
        <NavLink to="/signup" className="login__navigation">
        <p className="login__signin">Регистрация</p>
        </NavLink>
        </div>
        </section>
    )
}

export default Login