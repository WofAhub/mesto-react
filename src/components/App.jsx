import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  const [isEditAvatarPopupOpen, isSetEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, isSetEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, isSetAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    isSetEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    isSetEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    isSetAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    isSetEditAvatarPopupOpen(false)
    isSetEditProfilePopupOpen(false)
    isSetAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm 
          title={'Обновить аватар'}
          isOpen={isEditAvatarPopupOpen}
          setIsOpen={isSetEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonName={'Сохранить'}
        >
          <input
            id="input-avatar-url"
            name="avatar"
            type="url"
            className="pop-up__input pop-up__input_type_avatar-url"
            placeholder="Ссылка на картинку"
            required />

          <span
            className="pop-up__input-errormessage input-avatar-url-error">
          </span>
        </PopupWithForm>

        <PopupWithForm
          title={'Редактировать профиль'}
          isOpen={isEditProfilePopupOpen}
          setIsOpen={isSetEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonName={'Сохранить'}
        >
          <input 
            id="input-profile-name"
            name="name"
            type="text"
            className="pop-up__input pop-up__input_type_profile-name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required />

          <span
            className="pop-up__input-errormessage input-profile-name-error">
          </span>

          <input
            id="input-profile-description"
            name="about"
            type="text"
            className="pop-up__input pop-up__input_type_profile-description"
            placeholder="Описание"
            minLength="2"
            maxLength="200"
            required />

          <span
            className="pop-up__input-errormessage input-profile-description-error">
          </span>
        </PopupWithForm>

        <PopupWithForm
          title={'Новое место'}
          isOpen={isAddPlacePopupOpen}
          setIsOpen={isSetAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonName={'Добавить'}
        >
          <input 
            id="input-add-name"
            name="name"
            type="text"
            className="pop-up__input pop-up__input_type_img-name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required />
          <span
            className="pop-up__input-errormessage input-add-name-error">
          </span>

          <input
            id="input-add-url"
            name="link"
            type="url"
            className="pop-up__input pop-up__input_type_img-url"
            placeholder="Ссылка на картинку"
            required />
          <span
            className="pop-up__input-errormessage input-add-url-error">
          </span>
        </PopupWithForm>

        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;