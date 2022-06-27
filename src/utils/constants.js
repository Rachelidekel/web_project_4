//modals
const editProfileModal = document.querySelector(".popup_type_edit");
const addNewCardModal = document.querySelector(".popup_type_add-card");
const addNewAvatarModal = document.querySelector(".popup_type_avatar")

//
export const templateCardSelector = ".element__template";

//forms
export const editProfileForm = editProfileModal.querySelector(".popup__form");
export const addCardForm = addNewCardModal.querySelector(".popup__form");
export const addAvatarForm = addNewAvatarModal.querySelector(".popup__form");

//inputs
export const profileNameInput = document.querySelector(
  ".form__input_type_name"
);
export const profileJobInput = document.querySelector(".form__input_type_job");


//open modal buttons
export const editProfileButton = document.querySelector(
  ".profile__open-button"
);
export const addCardButton = document.querySelector(".profile__add-button");
export const addAvatarButton = document.querySelector(".profile__avatar-overlay")

export const profileAvatar = document.querySelector(".profile__image");
export const profileAvatarContainer = document.querySelector(
  ".profile__avatar"
);

//settings
export const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

//submit buttons
//export const editProfileSubmitButton = editProfileForm.querySelector(
  //settings.submitButtonSelector)
//export const addCardSubmitButton = addCardForm.querySelector(
  //settings.submitButtonSelector)
//export const avatarSubmitButton = addAvatarForm.querySelector(
  //settings.submitButtonSelector)




