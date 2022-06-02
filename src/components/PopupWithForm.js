import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitHandler) {
    super(popup);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs = [...this._form.querySelectorAll(".form__input")];

    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
