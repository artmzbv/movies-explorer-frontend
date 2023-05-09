import React from 'react'
import "./MoviesCard.css"

function MoviesCard(title, duration, src){
    return(
        <div className="card">
        <p className="card__title">{title}</p>
        <p className="card__duration">{duration}</p>
        <img src={src} alt="карточка" className="card__image"/>
        </div>
    )
}

export default MoviesCard