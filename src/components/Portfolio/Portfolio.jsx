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
          <li className="portfolio__reference">Статичный сайт
              <Link className="portfolio__link" to={"https://github.com/artmzbv/how-to-learn"} target="_blank">
              <img src={logoReference} alt="ссылка" />
              </Link>
          </li>
          <li className="portfolio__reference">Адаптивный сайт
              <Link  className="portfolio__link" to={"https://github.com/artmzbv"}>
              <img className="portfolio__picture" src={logoReference} alt="ссылка" />
              </Link>
          </li>
          <li className="portfolio__reference">Одностраничное приложение
              <Link className="portfolio__link" to={"https://github.com/artmzbv/react-mesto-api-full-gha"}>
              <img  src={logoReference} alt="ссылка" />
              </Link>
          </li>
      </ul>
      </section>
    )
}

export default Portfolio
