import {React, useState} from "react";

import "./MoviesCard.css";
import saveIcon from '../../images/saveicon.svg'
import savedIcon from '../../images/savedicon.svg'

export default function  MoviesCard({
    title,
    duration,
    src,
    saved
  }) {
     
    const [isSaved, setSaved] = useState(saved);
    const handleSaveCard = () => {
      setSaved(!isSaved);
    };

    return (
      <div className="card">
        <div className="card__container">
            <div className="card__info">
            <h2 className="card__title">{title}</h2>
            <p className="card__duration">{duration}</p>
            </div>
            {isSaved ?
            <button type="button" className="card__button" onClick={handleSaveCard}>
                {<img src={saveIcon} alt="Сохранено"/>}</button>
                :
            <button type="button" className="card__button" onClick={handleSaveCard}>
                {<img src={savedIcon} alt="Сохранить"/>}</button>
                }
        </div>
        <img className="card__image" src={src} alt="кадр" />
        </div>
    );
  }
