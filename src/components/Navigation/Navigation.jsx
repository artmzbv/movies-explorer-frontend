import "./Navigation.css"
import logo from "../../images/logo.svg"

function Navigation() {
    return(
        <section className="navigation">
        <div className="navigation__menu">
        <img src={logo} alt="логотип" className="navigation__logo"/>
        <button className="navigation__film">Фильмы</button>
        <button className="navigation__film">Сохраненные фильмы</button>
        </div>
        <button className="navigation__account">Аккаунт</button>
        </section>
    )
}

export default Navigation