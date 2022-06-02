class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _showError(input) {
    const { inputErrorClass, errorClass } = this._settings;
    const error = input.validationMessage;
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;

    errorElement.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }

  _hideError(input) {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";

    errorElement.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  }

  _checkValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _disableSubmitButton(button) {
    const { inactiveButtonClass } = this._settings;
    button.disabled = true;
    button.classList.add(inactiveButtonClass);
  }
  _enableSubmitButton(button) {
    const { inactiveButtonClass } = this._settings;
    button.disabled = false;
    button.classList.remove(inactiveButtonClass);
  }

  _isFormValid = () =>
    this._inputs.every((input) => input.validity.valid === true);

  _toggleButtonState = () => {
    const { inactiveButtonClass } = this._settings;

    if (this._isFormValid()) {
      this._enableSubmitButton(this._button, inactiveButtonClass);
    } else {
      this._disableSubmitButton(this._button, inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    const { inputSelector, submitButtonSelector } = this._settings;
    this._inputs = [...this._form.querySelectorAll(inputSelector)];
    this._button = this._form.querySelector(submitButtonSelector);

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidity(input, this._settings);
        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._inputs.forEach((input) => {
      this._hideError(input);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
