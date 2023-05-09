import "./Register.css"
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom" 

function Register(){
    return(
        <section className="register">
        <img className="register__logo" src={logo} alt="Логотип" />
        <h1>Добро пожаловать</h1>
        <p className="register__input-name">Имя</p>
        <input className="register__input"
        type="name"
        name="name"
        required />
        <p className="register__input-name">E-mail</p>
        <input className="register__input"
        type="email"
        name="email"
        required />
        <p className="register__input-name">Пароль</p>
        <input className="register__input"
        type="password"
        name="password"
        required />
        <button className="register__signup-block">
        <p className="register__signup-text">Зарегистрироваться</p>
        </button>
        <div className="register__signedup">
        <p className="register__signedup-question">Уже зарегистрированы?</p>
        <NavLink to="/signin" className="register__navigation">
        <p className="register__signin">Войти</p>
        </NavLink>
        </div>
        </section>
    )
}

export default Register