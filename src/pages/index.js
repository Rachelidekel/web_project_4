import "./index.css";
import { Card } from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import initialCards from "../utils/initialCards.js";
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
} from "../utils/constants.js";

//initialCards.reverse();

api.getInitialCards().then((res) => {
  section.renderItems(res);
});

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title-name",
  profileJobSelector: ".profile__subtitle-job",
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({
    profileNameInput: res.name,
    profileJobInput: res.about,
  });
});

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".elements__list"
);
//section.renderItems();

const previewImageModal = new PopupWithImage(".popup_type_image");
previewImageModal.setEventListeners();

const confirmModal = new PopupWithSubmit(".popup_type_delete-card");
confirmModal.setEventListeners();

//function handleImagePreview(data) {
//previewImageModal.open(data);
//}

//function handleDeleteCard(id) {
//confirmModal.open()
//}

//function handleLikeCard(id) {

//}

function createCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        previewImageModal.open(data);
      },
      handleLikeIcon: (id) => {
        const isAlreadyLiked = card.isLiked();
        if (isAlreadyLiked) {
          api.dislikedCard(id).then((res) => {
            card.likeCard(res.likes);
          });
        }
      },
      handleDeleteIcon: (id) => {
        confirmModal.open();

        confirmModal.setAction(() => {
          api.deleteCard(id).then((res) => {
            card.removeCard();
            confirmModal.close();
          });
        });
      },
    },
    templateCardSelector,
    userId
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(data) {
  //const listItem = createCard(data);
  const listItem = api.createCard(data).then((res) => {
    createCard(res);
  });
  section.addItem(listItem);
}

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

function submitAddCardForm(data) {
  renderCard(data);
  addCardModal.close();
}

//
const editFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

function fillProfileFormPreviousInput() {
  const { name, job } = userInfo.getUserInfo();
  profileNameInput.value = name;
  profileJobInput.value = job;
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
