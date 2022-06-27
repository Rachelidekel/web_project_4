export class UserInfo {
  constructor({
    profileNameSelector,
    profileJobSelector,
  }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
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

setUserAvatar( avatarImageInput, avatar) {
  this._avatar =  avatarImageInput;
  this._avatar.src = avatar;
}
}
