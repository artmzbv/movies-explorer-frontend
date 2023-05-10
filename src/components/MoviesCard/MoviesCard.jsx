import React from "react";

import "./MoviesCard.css";

export default function MoviesCard({
    title,
    duration,
    src,
  }) {
 
    return (
      <div className="card">
            <h2 className="card__title">{title}</h2>
            <p className="card__duration">{duration}</p>
        <img className="card__image" src={src} alt="кадр" />
        </div>
    );
  }
