export class Card {
  constructor({ name, link }, templateCardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const templateListItem = document
      .querySelector(this._templateCardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return templateListItem;
  }

  _handleLikeIcon = (evt) =>
    evt.target.classList.toggle("element__title-button_active");

  _handleDeleteIcon = () => this._listItem.remove();

  _addEventListeners() {
    this._likeButton = this._listItem.querySelector(".element__title-button");
    this._deleteButton = this._listItem.querySelector(
      ".element__delete-button"
    );

    this._likeButton.addEventListener("click", (evt) => {
      this._handleLikeIcon(evt);
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteIcon();
    });
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard = () => {
    this._listItem = this._getTemplate();
    this._title = this._listItem.querySelector(".element__title-name");
    this._image = this._listItem.querySelector(".element__item");
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = `Landscape image from a place named ${this._name}`;

    this._addEventListeners();

    return this._listItem;
  };
}
