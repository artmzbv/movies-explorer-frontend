import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cards } from "../../utils/constants/cards";
import Preloader from "../Preloader/Preloader"

export default function MoviesCardList() {
  return (
    <section className="list">
      <div className="list__table">
        {cards.map((card) => (
              <MoviesCard
                id={card.id}
                title={card.title}
                duration={card.duration}
                src={card.src}
                isMovieSaved={card.saved}
              />
            ))}
      </div>
      <button type="button" className="list__button">
          Ещё
      </button>
    </section>
  );
}