import "./Portfolio.css"
import logoReference from '../../images/reference.svg'

function Portfolio() {
    return(
      <section className="portfolio">
      <p className="portfolio__text">Портфолио</p>
      <div className="portfolio__reference">Статичный сайт
      <img src={logoReference} alt="ссылка" />
      </div>
      <div className="portfolio__reference">Адаптивный сайт
      <img className="portfolio__picture" src={logoReference} alt="ссылка" />
      </div>
      <div className="portfolio__reference">Одностраничное приложение
      <img  src={logoReference} alt="ссылка" />
      </div>
      </section>
    )
}

export default Portfolio
