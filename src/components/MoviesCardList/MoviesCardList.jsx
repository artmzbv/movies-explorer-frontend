import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cards } from "../../utils/constants/cards";

export default function MoviesCardList({isSaved}) {
  return (
    <section className="list">
      <div className="list__table">
        {isSaved ?
        cards.map((card) => (
              <MoviesCard
                id={card.id}
                title={card.title}
                duration={card.duration}
                src={card.src}
                saved={card.saved}
              />))
              :
              cards
              .filter((card) => card.saved)
              .map((card) => (
                <MoviesCard
                  id={card.id}
                  title={card.title}
                  duration={card.duration}
                  src={card.src}
                  saved={card.saved}
                />
            ))
        }
      </div>
      <button type="button" className="list__button">
          Ещё
      </button>
    </section>
  );
}