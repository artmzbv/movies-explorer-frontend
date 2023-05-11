import "./NavTab.css"

function NavTab(){
    return(
        <ul className="navtab__list">
        <li> <a className="navtab__text" href="#project">О проекте</a></li>
        <li> <a className="navtab__text" href="#techs">Технологии</a></li>
        <li> <a className="navtab__text" href="#me">Студент</a></li>
        </ul>
    )
}

export default NavTab