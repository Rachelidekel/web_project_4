import "./index.css";
import { Card } from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
//import { improveUX } from "../utils/utils.js";
import {
  templateCardSelector,
  editProfileForm,
  addCardForm,
  addAvatarForm,
  profileNameInput,
  profileJobInput,
  editProfileButton,
  addCardButton,
  profileAvatar,
  profileAvatarContainer,
  settings,
  addAvatarButton,
  editProfileSubmitButton,
  addCardSubmitButton,
  avatarSubmitButton,
} from "../utils/constants.js";

let userId;
let section;

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title-name",
  profileJobSelector: ".profile__subtitle-job",
  avatarImageInput: ".profile__image",
});

//
profileAvatar.alt = "user profile avatar";
profileAvatar.classList.add("profile__image");

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
  ([cardData, userData]) => {
    section = new Section(
      {
        items: cardData,
        renderer: (data) => section.addItem(createCard(data)),
      },
      ".elements__list"
    );
    userId = userData._id;
    section.renderItems();
    userInfo.setUserInfo({
      profileNameInput: userData.name,
      profileJobInput: userData.about,
    });

    profileAvatarContainer.prepend(profileAvatar);
    userInfo.setUserAvatar({ avatarImageInput: userData.avatar });
  }
).catch(console.log); 

const previewImageModal = new PopupWithImage(".popup_type_image");
previewImageModal.setEventListeners();

const confirmModal = new PopupWithSubmit(".popup_type_delete-card");
confirmModal.setEventListeners();

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
          api.dislikeCard(id).then((res) => {
            card.likeCard(res.likes);
          }).catch(console.log); ;
        } else {
          api.likeCard(id).then((res) => {
            card.likeCard(res.likes);
          }).catch(console.log); ;
        }
      },
      handleDeleteIcon: (id) => {
        confirmModal.open();

        confirmModal.setAction(() => {
          api.deleteCard(id).then((res) => {
            card.removeCard();
            confirmModal.close();
          }).catch(console.log); ;
        });
      },
    },
    templateCardSelector,
    userId
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const editModal = new PopupWithForm(".popup_type_edit", sumbitEditProfileForm);
editModal.setEventListeners();

function sumbitEditProfileForm(data) {
  //changeButtonText(editProfileSubmitButton, "Saving...");
  api.setUserInfo(data.name, data.job).then((data) => {
    //changeButtonText(editProfileSubmitButton, "Save");
    userInfo.setUserInfo({
      profileNameInput: data.name,
      profileJobInput: data.about,
    }); editModal.close();
  }).catch(console.log).finally(() => renderLoading());  
}

const addCardModal = new PopupWithForm(
  ".popup_type_add-card",
  submitAddCardForm
);
addCardModal.setEventListeners();

function submitAddCardForm(data) {
  //changeButtonText(addCardSubmitButton, "Creating...");
  api.createCard(data).then((res) => {
    createCard(res);
    //changeButtonText(addCardSubmitButton, "Create");
    section.addItem(createCard(res))
    addCardModal.close();
  }).catch(console.log).finally(() => renderLoading()) 
}

const addAvatarModal = new PopupWithForm(
  ".popup_type_avatar",
  submitAddAvatarForm
);
addAvatarModal.setEventListeners();

function submitAddAvatarForm(data) {
  //changeButtonText(avatarSubmitButton, "Saving...");
  api.setUserAvatar(data.link).then((data) => {
    userInfo.setUserAvatar({ avatarImageInput: data.avatar });
    //changeButtonText(avatarSubmitButton, "Save");
    addAvatarModal.close();
  }).catch(console.log).finally(() => renderLoading()); 
  
}

//
const editFormValidator = new FormValidator(settings, editProfileForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
const addAvatarFormValidator = new FormValidator(settings, addAvatarForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addAvatarFormValidator.enableValidation();

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

addCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardModal.open();
});

addAvatarButton.addEventListener("click", () => {
  addAvatarFormValidator.resetValidation();
  addAvatarModal.open();
});
