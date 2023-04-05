import React from "react";
import Card from "./Card";
import { api } from "../utils/Api";

function Main ({onEditAvatar, onCardClick, onOverlay, onEditProfile, onAddPlace}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() =>  {
    api.getCurrentUser()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(`Ошибка в Main, React.useEffect, getCurrentUser: ${err}`);
    })
  })

  React.useEffect(() => {
    api.getInitialCards()
    .then((card) => {
      setCards(card)
    })
    .catch((err) => {
      console.log(`Ошибка в Main, React.useEffect, getInitialCards: ${err}`);
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
  
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="аватар"
        />
  
        <button
          className="profile__avatar-button"
          type="button"
          onClick = {onEditAvatar}> 
        </button>
  
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            className="button button_type_edit-button"
            type="button"
            onClick={onEditProfile}>
          </button>
        </div>
  
        <button
          className="button button_type_add-button"
          type="button"
          onClick={onAddPlace}>  
        </button>

      </section>

      <section className="elements">
        {cards.map(card => {
          return(
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          )
        })}
      </section>
    </main>
  )
}

export default Main;