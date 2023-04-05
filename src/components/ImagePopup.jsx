import React from "react"

function ImagePopup() {
  return(
    <div className="pop-up pop-up_type_img pop-up_type_overlay">
      <figure className="pop-up__img-container">

        <button
          className="button  button_type_close-button"
          type="button">
        </button>

        <img className="pop-up__img" src="#" alt="#" />
        <figcaption className="pop-up__img-caption"></figcaption>

      </figure>
    </div>
  )
}

export default ImagePopup;