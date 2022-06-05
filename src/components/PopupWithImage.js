import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = (name, link) => {
    super.open();
    this._name = name;
    this._link = link;

    const imageCardModal = this._popup.querySelector(".popup__image");
    const imageCardCaptionModal = this._popup.querySelector(".popup__caption");

    imageCardCaptionModal.textContent = this._name;
    imageCardModal.src = this._link;
    imageCardModal.alt = `Landscape image from a place named ${this._name}`;
  };
}
