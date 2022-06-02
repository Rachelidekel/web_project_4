import { Card } from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import {
  templateCardSelector,
  list,
  editProfileForm,
  addCardForm,
  profileNameInput,
  profileJobInput,
  editProfileButton,
  addcardButton,
} from "./utils/constants.js";

const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

initialCards.reverse();

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".element__template"
);
section.renderItems();

const previewImageModal = new PopupWithImage(".popup_type_image");
previewImageModal.setEventListeners();

function handleImagePreview(name, link) {
  previewImageModal.open(name, link);
}

function renderCard({ name, link }, card) {
  const listItem = new Card(
    { name, link },
    templateCardSelector,
    handleImagePreview
  );
  list.prepend(listItem.generateCard(card));
}

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title-name",
  profileJobSelector: ".profile__subtitle-job",
});

const editModal = new PopupWithForm(".popup_type_edit", sumbitEditProfileForm);
editModal.setEventListeners();

function sumbitEditProfileForm({ name, job }) {
  userInfo.setUserInfo({ profileNameInput: name, profileJobInput: job });
  editModal.close();
}

const addCardModal = new PopupWithForm(
  ".popup_type_add-card",
  submitAddCardForm
);
addCardModal.setEventListeners();

function submitAddCardForm({ name, link }) {
  const element = renderCard({ name, link });
  section.addItem(element);
  addCardModal.close();
}

//
const editFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//
//const profile = document.querySelector(".profile");
//const profileName = profile.querySelector(".profile__title-name");
//const profileJob = profile.querySelector(".profile__subtitle-job");

//function fillProfileForm() {
//profileName.textContent = profileNameInput.value;
//profileJob.textContent = profileJobInput.value;
//}

function fillProfileFormPreviousInput() {
  const profileName = userInfo.getUserInfo();
  const profileJob = userInfo.getUserInfo();
  profileNameInput.value = profileName.name;
  profileJobInput.value = profileJob.job;
}

editProfileButton.addEventListener("click", () => {
  fillProfileFormPreviousInput();
  editFormValidator.resetValidation();
  editModal.open();
});

addcardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardModal.open();
});
