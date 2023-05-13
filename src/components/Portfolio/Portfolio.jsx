import React from "react";
import { Link } from "react-router-dom";

import "./Portfolio.css"
import logoReference from '../../images/reference.svg'

function Portfolio() {
    return(
      <section className="portfolio">
      <Link className="portfolio__link" to={"https://github.com/artmzbv"} target="_blank">
      <p className="portfolio__text">Портфолио</p>
      </Link>
      <ul className="portfolio__references">
      <Link className="portfolio__link" to={"https://github.com/artmzbv/how-to-learn"} target="_blank">
      <li className="portfolio__reference">Статичный сайт
      <img src={logoReference} alt="ссылка" />
      </li>
      </Link>
      <Link  className="portfolio__link" to={"https://github.com/artmzbv"}>
      <li className="portfolio__reference">Адаптивный сайт
      <img className="portfolio__picture" src={logoReference} alt="ссылка" />
      </li>
      </Link>
      <Link className="portfolio__link" to={"https://github.com/artmzbv/react-mesto-api-full-gha"}>
      <li className="portfolio__reference">Одностраничное приложение
      <img  src={logoReference} alt="ссылка" />
      </li>
      </Link>
      </ul>
      </section>
    )
}

export default Portfolio
