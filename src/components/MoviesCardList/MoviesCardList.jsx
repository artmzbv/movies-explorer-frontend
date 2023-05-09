import React from "react"
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"

function MoviesCardList(props) {
    const cards = props;
    return(
<section className="list">
    {cards.map((card) => <MoviesCard {...card}/> )}
</section>
    )
}

export default MoviesCardList