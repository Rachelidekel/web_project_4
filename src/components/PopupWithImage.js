import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._imageCardModal = this._popup.querySelector(".popup__image");
    this._imageCardCaptionModal = this._popup.querySelector(".popup__caption");
  }

  open = (data) => {
    super.open();
    this._name = data.name;
    this._link = data.link;

    this._imageCardCaptionModal.textContent = this._name;
    this._imageCardModal.src = this._link;
    this._imageCardModal.alt = `Landscape image from a place named ${this._name}`;
  };
}
