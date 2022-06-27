import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitHandler) {
    super(popup);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = [...this._form.querySelectorAll(".form__input")];
    this._submitButton = this._form.querySelector(".form__button")
    this._submitButtonText = this._submitButton.textContent
  }

  _getInputValues() {
    const inputValues = {};

    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      //this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
