export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(".profile__image");
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo({ profileNameInput, profileJobInput }) {
    this._profileName.textContent = profileNameInput;
    this._profileJob.textContent = profileJobInput;
  }

  setUserAvatar({ avatarImageInput }) {
    this._avatar.src = avatarImageInput;
  }
}
