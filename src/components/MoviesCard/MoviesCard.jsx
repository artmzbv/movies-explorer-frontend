import {React, useState} from "react";

import "./MoviesCard.css";
import saveIcon from '../../images/saveicon.svg'
import emptySaveIcon from '../../images/saveicon.svg'

export default function MoviesCard({
    title,
    duration,
    src,
  }) {
    
    // const [isSaved, setIsSaved] = useState(isCardSaved);
    // const handleSaveCard = () => {
    //   setIsSaved(!isSaved);
    // };
    return (
      <div className="card">
            <h2 className="card__title">{title}</h2>
            <p className="card__duration">{duration}</p>
        <img className="card__image" src={src} alt="кадр" />
        </div>
    );
  }
