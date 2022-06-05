//modals
const editProfileModal = document.querySelector(".popup_type_edit");
const addNewCardModal = document.querySelector(".popup_type_add-card");

export const templateCardSelector = ".element__template";
export const list = document.querySelector(".elements__list");

//forms
export const editProfileForm = editProfileModal.querySelector(".popup__form");
export const addCardForm = addNewCardModal.querySelector(".popup__form");

//
//export const imageModal = document.querySelector(".popup_type_image");
//const imageCardModal = imageModal.querySelector(".popup__image");
//const imageCardCaptionModal = imageModal.querySelector(".popup__caption");

export const profileNameInput = document.querySelector(
  ".form__input_type_name"
);
export const profileJobInput = document.querySelector(".form__input_type_job");

//open modal buttons
export const editProfileButton = document.querySelector(
  ".profile__open-button"
);
export const addcardButton = document.querySelector(".profile__add-button");

//settings
export const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

