export class Card {
  constructor(
    { data, handleCardClick, handleLikeIcon, handleDeleteIcon },
    templateCardSelector,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIcon = handleDeleteIcon;
    this._handleLikeIcon = handleLikeIcon;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
  }

  _getTemplate() {
    const templateListItem = document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return templateListItem;
  }

  isLiked() {
    return this._likes.some((preson) => preson._id === this._userId);
  }

  removeCard() {
    this._listItem.remove();
    this._listItem = null;
  }

  likeCard(newLikes) {
    this._likes = newLikes;
    //this._listItem.querySelector(".element__likes-count").textContent =
      //this._likes.length;

    this._listItem
      .querySelector(".element__title-button")
      .classList.toggle("element__title-button_active");
  }

  _addEventListeners() {
    this._likeButton = this._listItem.querySelector(".element__title-button");
    this._deleteButton = this._listItem.querySelector(
      ".element__delete-button"
    );

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon(this._id);
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteIcon(this._id);
    });
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard = () => {
    this._listItem = this._getTemplate();
    this._title = this._listItem.querySelector(".element__title-name");
     this._listItem.querySelector(".element__likes-count").textContent =
      this._likes.length;
    this._image = this._listItem.querySelector(".element__item");
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = `Landscape image from a place named ${this._name}`;

    this._addEventListeners();

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = "none";
    }

    //this._listItem.querySelector(".element__likes-count").textContent =
      //this._likes.length;

    if (this.isLiked()) {
      this.likeCard(this._likes);
    }

    return this._listItem;
  };
}
