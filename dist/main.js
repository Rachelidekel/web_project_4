(()=>{"use strict";class e{constructor({name:e,link:t},s,n){this._name=e,this._link=t,this._templateCardSelector=s,this._handleCardClick=n}_getTemplate(){return document.querySelector(this._templateCardSelector).content.querySelector(".element").cloneNode(!0)}_handleLikeIcon=e=>e.target.classList.toggle("element__title-button_active");_handleDeleteIcon=()=>this._listItem.remove();_addEventListeners(){this._likeButton=this._listItem.querySelector(".element__title-button"),this._deleteButton=this._listItem.querySelector(".element__delete-button"),this._likeButton.addEventListener("click",(e=>{this._handleLikeIcon(e)})),this._deleteButton.addEventListener("click",(()=>{this._handleDeleteIcon()})),this._image.addEventListener("click",(()=>{this._handleCardClick(this._name,this._link)}))}generateCard=()=>(this._listItem=this._getTemplate(),this._title=this._listItem.querySelector(".element__title-name"),this._image=this._listItem.querySelector(".element__item"),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=`Landscape image from a place named ${this._name}`,this._addEventListeners(),this._listItem)}const t=class{constructor(e,t){this._settings=e,this._form=t}_showError(e){const{inputErrorClass:t,errorClass:s}=this._settings,n=e.validationMessage,i=this._form.querySelector(`#${e.id}-error`);i.textContent=n,i.classList.add(s),e.classList.add(t)}_hideError(e){const{inputErrorClass:t,errorClass:s}=this._settings,n=this._form.querySelector(`#${e.id}-error`);n.textContent="",n.classList.remove(s),e.classList.remove(t)}_checkValidity(e){e.validity.valid?this._hideError(e):this._showError(e)}_disableSubmitButton(e){const{inactiveButtonClass:t}=this._settings;e.disabled=!0,e.classList.add(t)}_enableSubmitButton(e){const{inactiveButtonClass:t}=this._settings;e.disabled=!1,e.classList.remove(t)}_isFormValid=()=>this._inputs.every((e=>!0===e.validity.valid));_toggleButtonState=()=>{const{inactiveButtonClass:e}=this._settings;this._isFormValid()?this._enableSubmitButton(this._button,e):this._disableSubmitButton(this._button,e)};_setEventListeners=()=>{const{inputSelector:e,submitButtonSelector:t}=this._settings;this._inputs=[...this._form.querySelectorAll(e)],this._button=this._form.querySelector(t),this._inputs.forEach((e=>{e.addEventListener("input",(()=>{this._checkValidity(e,this._settings),this._toggleButtonState()}))}))};resetValidation(){this._inputs.forEach((e=>{this._hideError(e)})),this._toggleButtonState()}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}};class s{constructor(e){this._popup=document.querySelector(e),this.close.bind(this)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};_handleOverlayClose=e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&this.close()};open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleOverlayClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleOverlayClose)}setEventListeners(){this._popup.querySelector(".popup__close-icon").addEventListener("click",(()=>{this.close()}))}}class n extends s{constructor(e,t){super(e),this._submitHandler=t,this._form=this._popup.querySelector(".popup__form")}_getInputValues(){const e={};return this._inputs=[...this._form.querySelectorAll(".form__input")],this._inputs.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._submitHandler(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}}const i=document.querySelector(".popup_type_edit"),o=document.querySelector(".popup_type_add-card"),r=document.querySelector(".elements__list"),l=i.querySelector(".popup__form"),a=o.querySelector(".popup__form"),_=document.querySelector(".form__input_type_name"),c=document.querySelector(".form__input_type_job"),u=document.querySelector(".profile__open-button"),p=document.querySelector(".profile__add-button"),d={inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible"},m=[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}];m.reverse();const h=new class{constructor({items:e,renderer:t},s){this._items=e,this._renderer=t,this._container=document.querySelector(s)}renderItems(){this._items.forEach((e=>{this._element=this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:m,renderer:b},".element__template");h.renderItems();const f=new class extends s{constructor(e){super(e)}open=(e,t)=>{super.open(),this._name=e,this._link=t;const s=this._popup.querySelector(".popup__image");this._popup.querySelector(".popup__caption").textContent=this._name,s.src=this._link,s.alt=`Landscape image from a place named ${this._name}`}}(".popup_type_image");function y(e,t){f.open(e,t)}function b({name:t,link:s},n){const i=new e({name:t,link:s},".element__template",y);r.prepend(i.generateCard(n))}f.setEventListeners();const v=new class{constructor({profileNameSelector:e,profileJobSelector:t}){this._profileName=document.querySelector(e),this._profileJob=document.querySelector(t)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}setUserInfo({profileNameInput:e,profileJobInput:t}){this._profileName.textContent=e,this._profileJob.textContent=t}}({profileNameSelector:".profile__title-name",profileJobSelector:".profile__subtitle-job"}),g=new n(".popup_type_edit",(function({name:e,job:t}){v.setUserInfo({profileNameInput:e,profileJobInput:t}),g.close()}));g.setEventListeners();const S=new n(".popup_type_add-card",(function({name:e,link:t}){const s=b({name:e,link:t});h.addItem(s),S.close()}));S.setEventListeners();const L=new t(d,l),E=new t(d,a);L.enableValidation(),E.enableValidation(),u.addEventListener("click",(()=>{!function(){const e=v.getUserInfo(),t=v.getUserInfo();_.value=e.name,c.value=t.job}(),L.resetValidation(),g.open()})),p.addEventListener("click",(()=>{E.resetValidation(),S.open()}))})();