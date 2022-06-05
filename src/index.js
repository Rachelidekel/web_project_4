import "./pages/index.css";
import { Card } from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import initialCards from "./utils/initialCards";
import {
  templateCardSelector,
  list,
  editProfileForm,
  addCardForm,
  profileNameInput,
  profileJobInput,
  editProfileButton,
  addcardButton,
  settings,
} from "./utils/constants.js";


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
