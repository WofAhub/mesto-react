import React from "react";

function Card ({card, onCardClick}) {
  const handleClick = () => {
    onCardClick(card);
  } 
  return (
    <div className="element">
      <button
        className="button button_type_delete-button"
        type="button">
      </button>
      <img 
        className="element__img" 
        src={card.link} 
        alt={`Картинка ${card.name}`} 
        onClick={handleClick}
      />
      
      <div className="element__items">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container">
          <button
            className="button button_type_like-button"
            type="button"> 
          </button>
          <span className="element__counterLikes">0</span>
        </div>  
      </div>
    </div>
  )
}

export default Card;