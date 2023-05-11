import "./SearchForm.css"
import loop from "../../images/loop.svg"
import search from "../../images/search.svg"

function SearchForm(){
    return(
        <section className="search">
        <form className="search__form">
            <div className="search_container">
            <img src={loop} alt="Поиск" className="search__loop"/>
            <input
                name=""
                type="text"
                className="search__input"
                placeholder="Фильм"
                required
            />
            </div>
            <button className="search__button" type="submit">
                <img src={search} alt="поиск" className="search__submit-image"/>
            </button>
            <div className="search_container">
            <div className="search__shortfilms">
                <input className="search__shortfilms-input" type="checkbox"/>
                <span className="search__shortfilms-span" />
                </div>
                <p className="search__shortfilms-name">Короткометражки</p>
                </div>
         </form>
        </section>
    )
}

export default SearchForm