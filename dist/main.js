!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class t{constructor(t,s,n){let{name:i,link:o}=t;e(this,"_handleLikeIcon",(e=>e.target.classList.toggle("element__title-button_active"))),e(this,"_handleDeleteIcon",(()=>this._listItem.remove())),e(this,"generateCard",(()=>(this._listItem=this._getTemplate(),this._title=this._listItem.querySelector(".element__title-name"),this._image=this._listItem.querySelector(".element__item"),this._title.textContent=this._name,this._image.src=this._link,this._image.alt="Landscape image from a place named ".concat(this._name),this._addEventListeners(),this._listItem))),this._name=i,this._link=o,this._templateCardSelector=s,this._handleCardClick=n}_getTemplate(){return document.querySelector(this._templateCardSelector).content.querySelector(".element").cloneNode(!0)}_addEventListeners(){this._likeButton=this._listItem.querySelector(".element__title-button"),this._deleteButton=this._listItem.querySelector(".element__delete-button"),this._likeButton.addEventListener("click",(e=>{this._handleLikeIcon(e)})),this._deleteButton.addEventListener("click",(()=>{this._handleDeleteIcon()})),this._image.addEventListener("click",(()=>{this._handleCardClick(this._name,this._link)}))}}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n=class{constructor(e,t){s(this,"_isFormValid",(()=>this._inputs.every((e=>!0===e.validity.valid)))),s(this,"_toggleButtonState",(()=>{const{inactiveButtonClass:e}=this._settings;this._isFormValid()?this._enableSubmitButton(this._button,e):this._disableSubmitButton(this._button,e)})),s(this,"_setEventListeners",(()=>{const{inputSelector:e,submitButtonSelector:t}=this._settings;this._inputs=[...this._form.querySelectorAll(e)],this._button=this._form.querySelector(t),this._inputs.forEach((e=>{e.addEventListener("input",(()=>{this._checkValidity(e,this._settings),this._toggleButtonState()}))}))})),this._settings=e,this._form=t}_showError(e){const{inputErrorClass:t,errorClass:s}=this._settings,n=e.validationMessage,i=this._form.querySelector("#".concat(e.id,"-error"));i.textContent=n,i.classList.add(s),e.classList.add(t)}_hideError(e){const{inputErrorClass:t,errorClass:s}=this._settings,n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent="",n.classList.remove(s),e.classList.remove(t)}_checkValidity(e){e.validity.valid?this._hideError(e):this._showError(e)}_disableSubmitButton(e){const{inactiveButtonClass:t}=this._settings;e.disabled=!0,e.classList.add(t)}_enableSubmitButton(e){const{inactiveButtonClass:t}=this._settings;e.disabled=!1,e.classList.remove(t)}resetValidation(){this._inputs.forEach((e=>{this._hideError(e)})),this._toggleButtonState()}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}};function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor(e){i(this,"_handleEscClose",(e=>{"Escape"===e.key&&this.close()})),i(this,"_handleOverlayClose",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&this.close()})),this._popup=document.querySelector(e),this.close.bind(this)}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleOverlayClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleOverlayClose)}setEventListeners(){this._popup.querySelector(".popup__close-icon").addEventListener("click",(()=>{this.close()}))}}class r extends o{constructor(e,t){super(e),this._submitHandler=t,this._form=this._popup.querySelector(".popup__form")}_getInputValues(){const e={};return this._inputs=[...this._form.querySelectorAll(".form__input")],this._inputs.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._submitHandler(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}}const l=document.querySelector(".popup_type_edit"),a=document.querySelector(".popup_type_add-card"),c=document.querySelector(".elements__list"),_=l.querySelector(".popup__form"),u=a.querySelector(".popup__form"),p=document.querySelector(".form__input_type_name"),d=document.querySelector(".form__input_type_job"),h=document.querySelector(".profile__open-button"),m=document.querySelector(".profile__add-button"),b={inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible"},f=[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}];f.reverse();const y=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._element=this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:f,renderer:S},".element__template");y.renderItems();const v=new class extends o{constructor(e){var t,s;super(e),s=(e,t)=>{super.open(),this._name=e,this._link=t;const s=this._popup.querySelector(".popup__image");this._popup.querySelector(".popup__caption").textContent=this._name,s.src=this._link,s.alt="Landscape image from a place named ".concat(this._name)},(t="open")in this?Object.defineProperty(this,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):this.open=s}}(".popup_type_image");function g(e,t){v.open(e,t)}function S(e,s){let{name:n,link:i}=e;const o=new t({name:n,link:i},".element__template",g);c.prepend(o.generateCard(s))}v.setEventListeners();const L=new class{constructor(e){let{profileNameSelector:t,profileJobSelector:s}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}setUserInfo(e){let{profileNameInput:t,profileJobInput:s}=e;this._profileName.textContent=t,this._profileJob.textContent=s}}({profileNameSelector:".profile__title-name",profileJobSelector:".profile__subtitle-job"}),E=new r(".popup_type_edit",(function(e){let{name:t,job:s}=e;L.setUserInfo({profileNameInput:t,profileJobInput:s}),E.close()}));E.setEventListeners();const k=new r(".popup_type_add-card",(function(e){let{name:t,link:s}=e;const n=S({name:t,link:s});y.addItem(n),k.close()}));k.setEventListeners();const C=new n(b,_),q=new n(b,u);C.enableValidation(),q.enableValidation(),h.addEventListener("click",(()=>{!function(){const e=L.getUserInfo(),t=L.getUserInfo();p.value=e.name,d.value=t.job}(),C.resetValidation(),E.open()})),m.addEventListener("click",(()=>{q.resetValidation(),k.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE4QyxFQUFXUixJQUluQ1MsR0FDQUwsRUFBa0JqRSxrQkFDbEIrRCxFQUFVcEQsVUFHWnNCLEVBQWNuRSxpQkFBaUIsU0FBUyxLQUN0Q3FHLEVBQXFCbkUsa0JBQ3JCZ0UsRUFBYXJELFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW1fd2ViX3Byb2plY3RfOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtX3dlYl9wcm9qZWN0XzgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bV93ZWJfcHJvamVjdF84Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtX3dlYl9wcm9qZWN0XzgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bV93ZWJfcHJvamVjdF84Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW1fd2ViX3Byb2plY3RfOC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW1fd2ViX3Byb2plY3RfOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtX3dlYl9wcm9qZWN0XzgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW1fd2ViX3Byb2plY3RfOC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGxpbmsgfSwgdGVtcGxhdGVDYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgIHRoaXMuX3RlbXBsYXRlQ2FyZFNlbGVjdG9yID0gdGVtcGxhdGVDYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUxpc3RJdGVtID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVDYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZUxpc3RJdGVtO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2VJY29uID0gKGV2dCkgPT5cclxuICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRfX3RpdGxlLWJ1dHRvbl9hY3RpdmVcIik7XHJcblxyXG4gIF9oYW5kbGVEZWxldGVJY29uID0gKCkgPT4gdGhpcy5fbGlzdEl0ZW0ucmVtb3ZlKCk7XHJcblxyXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9saXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX3RpdGxlLWJ1dHRvblwiKTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmVsZW1lbnRfX2RlbGV0ZS1idXR0b25cIlxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fbGlzdEl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9saXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX3RpdGxlLW5hbWVcIik7XHJcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX2xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9faXRlbVwiKTtcclxuICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSBgTGFuZHNjYXBlIGltYWdlIGZyb20gYSBwbGFjZSBuYW1lZCAke3RoaXMuX25hbWV9YDtcclxuXHJcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9saXN0SXRlbTtcclxuICB9O1xyXG59XHJcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtKSB7XHJcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm07XHJcbiAgfVxyXG5cclxuICBfc2hvd0Vycm9yKGlucHV0KSB7XHJcbiAgICBjb25zdCB7IGlucHV0RXJyb3JDbGFzcywgZXJyb3JDbGFzcyB9ID0gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICBjb25zdCBlcnJvciA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yO1xyXG5cclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKGVycm9yQ2xhc3MpO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChpbnB1dEVycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVFcnJvcihpbnB1dCkge1xyXG4gICAgY29uc3QgeyBpbnB1dEVycm9yQ2xhc3MsIGVycm9yQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXJyb3JDbGFzcyk7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKGlucHV0RXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tWYWxpZGl0eShpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihpbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2Rpc2FibGVTdWJtaXRCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBjb25zdCB7IGluYWN0aXZlQnV0dG9uQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH1cclxuICBfZW5hYmxlU3VibWl0QnV0dG9uKGJ1dHRvbikge1xyXG4gICAgY29uc3QgeyBpbmFjdGl2ZUJ1dHRvbkNsYXNzIH0gPSB0aGlzLl9zZXR0aW5ncztcclxuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaXNGb3JtVmFsaWQgPSAoKSA9PlxyXG4gICAgdGhpcy5faW5wdXRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQgPT09IHRydWUpO1xyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGluYWN0aXZlQnV0dG9uQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuX2VuYWJsZVN1Ym1pdEJ1dHRvbih0aGlzLl9idXR0b24sIGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZVN1Ym1pdEJ1dHRvbih0aGlzLl9idXR0b24sIGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW5wdXRTZWxlY3Rvciwgc3VibWl0QnV0dG9uU2VsZWN0b3IgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG4gICAgdGhpcy5faW5wdXRzID0gWy4uLnRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChpbnB1dFNlbGVjdG9yKV07XHJcbiAgICB0aGlzLl9idXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3Ioc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrVmFsaWRpdHkoaW5wdXQsIHRoaXMuX3NldHRpbmdzKTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFuZGxlT3ZlcmxheUNsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwXCIpIHx8XHJcbiAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlLWJ1dHRvblwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZS1pY29uXCIpO1xyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXAsIHN1Ym1pdEhhbmRsZXIpIHtcclxuICAgIHN1cGVyKHBvcHVwKTtcclxuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSBzdWJtaXRIYW5kbGVyO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzID0gWy4uLnRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKV07XHJcblxyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiLy9tb2RhbHNcclxuY29uc3QgZWRpdFByb2ZpbGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9lZGl0XCIpO1xyXG5jb25zdCBhZGROZXdDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfYWRkLWNhcmRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYXJkU2VsZWN0b3IgPSBcIi5lbGVtZW50X190ZW1wbGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2xpc3RcIik7XHJcblxyXG4vL2Zvcm1zXHJcbmV4cG9ydCBjb25zdCBlZGl0UHJvZmlsZUZvcm0gPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkRm9ybSA9IGFkZE5ld0NhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG5cclxuLy9cclxuLy9leHBvcnQgY29uc3QgaW1hZ2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9pbWFnZVwiKTtcclxuLy9jb25zdCBpbWFnZUNhcmRNb2RhbCA9IGltYWdlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XHJcbi8vY29uc3QgaW1hZ2VDYXJkQ2FwdGlvbk1vZGFsID0gaW1hZ2VNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jYXB0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmZvcm1fX2lucHV0X3R5cGVfbmFtZVwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSm9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0X3R5cGVfam9iXCIpO1xyXG5cclxuLy9vcGVuIG1vZGFsIGJ1dHRvbnNcclxuZXhwb3J0IGNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wcm9maWxlX19vcGVuLWJ1dHRvblwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBhZGRjYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG4iLCJpbXBvcnQgXCIuL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgdGVtcGxhdGVDYXJkU2VsZWN0b3IsXHJcbiAgbGlzdCxcclxuICBlZGl0UHJvZmlsZUZvcm0sXHJcbiAgYWRkQ2FyZEZvcm0sXHJcbiAgcHJvZmlsZU5hbWVJbnB1dCxcclxuICBwcm9maWxlSm9iSW5wdXQsXHJcbiAgZWRpdFByb2ZpbGVCdXR0b24sXHJcbiAgYWRkY2FyZEJ1dHRvbixcclxufSBmcm9tIFwiLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1fX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuaW5pdGlhbENhcmRzLnJldmVyc2UoKTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IHJlbmRlckNhcmQsXHJcbiAgfSxcclxuICBcIi5lbGVtZW50X190ZW1wbGF0ZVwiXHJcbik7XHJcbnNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxuXHJcbmNvbnN0IHByZXZpZXdJbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX3R5cGVfaW1hZ2VcIik7XHJcbnByZXZpZXdJbWFnZU1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbWFnZVByZXZpZXcobmFtZSwgbGluaykge1xyXG4gIHByZXZpZXdJbWFnZU1vZGFsLm9wZW4obmFtZSwgbGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhcmQoeyBuYW1lLCBsaW5rIH0sIGNhcmQpIHtcclxuICBjb25zdCBsaXN0SXRlbSA9IG5ldyBDYXJkKFxyXG4gICAgeyBuYW1lLCBsaW5rIH0sXHJcbiAgICB0ZW1wbGF0ZUNhcmRTZWxlY3RvcixcclxuICAgIGhhbmRsZUltYWdlUHJldmlld1xyXG4gICk7XHJcbiAgbGlzdC5wcmVwZW5kKGxpc3RJdGVtLmdlbmVyYXRlQ2FyZChjYXJkKSk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlTmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX190aXRsZS1uYW1lXCIsXHJcbiAgcHJvZmlsZUpvYlNlbGVjdG9yOiBcIi5wcm9maWxlX19zdWJ0aXRsZS1qb2JcIixcclxufSk7XHJcblxyXG5jb25zdCBlZGl0TW9kYWwgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF90eXBlX2VkaXRcIiwgc3VtYml0RWRpdFByb2ZpbGVGb3JtKTtcclxuZWRpdE1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBzdW1iaXRFZGl0UHJvZmlsZUZvcm0oeyBuYW1lLCBqb2IgfSkge1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgcHJvZmlsZU5hbWVJbnB1dDogbmFtZSwgcHJvZmlsZUpvYklucHV0OiBqb2IgfSk7XHJcbiAgZWRpdE1vZGFsLmNsb3NlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGFkZENhcmRNb2RhbCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIFwiLnBvcHVwX3R5cGVfYWRkLWNhcmRcIixcclxuICBzdWJtaXRBZGRDYXJkRm9ybVxyXG4pO1xyXG5hZGRDYXJkTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEFkZENhcmRGb3JtKHsgbmFtZSwgbGluayB9KSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IHJlbmRlckNhcmQoeyBuYW1lLCBsaW5rIH0pO1xyXG4gIHNlY3Rpb24uYWRkSXRlbShlbGVtZW50KTtcclxuICBhZGRDYXJkTW9kYWwuY2xvc2UoKTtcclxufVxyXG5cclxuLy9cclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgZWRpdFByb2ZpbGVGb3JtKTtcclxuY29uc3QgYWRkQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgYWRkQ2FyZEZvcm0pO1xyXG5cclxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG4vL1xyXG4vL2NvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVcIik7XHJcbi8vY29uc3QgcHJvZmlsZU5hbWUgPSBwcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGUtbmFtZVwiKTtcclxuLy9jb25zdCBwcm9maWxlSm9iID0gcHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlLWpvYlwiKTtcclxuXHJcbi8vZnVuY3Rpb24gZmlsbFByb2ZpbGVGb3JtKCkge1xyXG4vL3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gcHJvZmlsZU5hbWVJbnB1dC52YWx1ZTtcclxuLy9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gcHJvZmlsZUpvYklucHV0LnZhbHVlO1xyXG4vL31cclxuXHJcbmZ1bmN0aW9uIGZpbGxQcm9maWxlRm9ybVByZXZpb3VzSW5wdXQoKSB7XHJcbiAgY29uc3QgcHJvZmlsZU5hbWUgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIGNvbnN0IHByb2ZpbGVKb2IgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIHByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZS5uYW1lO1xyXG4gIHByb2ZpbGVKb2JJbnB1dC52YWx1ZSA9IHByb2ZpbGVKb2Iuam9iO1xyXG59XHJcblxyXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZpbGxQcm9maWxlRm9ybVByZXZpb3VzSW5wdXQoKTtcclxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBlZGl0TW9kYWwub3BlbigpO1xyXG59KTtcclxuXHJcbmFkZGNhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRDYXJkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBhZGRDYXJkTW9kYWwub3BlbigpO1xyXG59KTtcclxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuID0gKG5hbWUsIGxpbmspID0+IHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGxpbms7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VDYXJkTW9kYWwgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIGNvbnN0IGltYWdlQ2FyZENhcHRpb25Nb2RhbCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcHRpb25cIik7XHJcblxyXG4gICAgaW1hZ2VDYXJkQ2FwdGlvbk1vZGFsLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIGltYWdlQ2FyZE1vZGFsLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICBpbWFnZUNhcmRNb2RhbC5hbHQgPSBgTGFuZHNjYXBlIGltYWdlIGZyb20gYSBwbGFjZSBuYW1lZCAke3RoaXMuX25hbWV9YDtcclxuXHJcbiAgICAvL3RoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgICAvL2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZVNlbGVjdG9yLCBwcm9maWxlSm9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUpvYlNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7IHByb2ZpbGVOYW1lSW5wdXQsIHByb2ZpbGVKb2JJbnB1dCB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IHByb2ZpbGVOYW1lSW5wdXQ7XHJcbiAgICB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gcHJvZmlsZUpvYklucHV0O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGVDYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJuYW1lIiwibGluayIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoaXMiLCJfbGlzdEl0ZW0iLCJyZW1vdmUiLCJfZ2V0VGVtcGxhdGUiLCJfdGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiX2ltYWdlIiwidGV4dENvbnRlbnQiLCJfbmFtZSIsInNyYyIsIl9saW5rIiwiYWx0IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3RlbXBsYXRlQ2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9saWtlQnV0dG9uIiwiX2RlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZUljb24iLCJfaGFuZGxlRGVsZXRlSWNvbiIsInNldHRpbmdzIiwiZm9ybSIsIl9pbnB1dHMiLCJldmVyeSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfc2V0dGluZ3MiLCJfaXNGb3JtVmFsaWQiLCJfZW5hYmxlU3VibWl0QnV0dG9uIiwiX2J1dHRvbiIsIl9kaXNhYmxlU3VibWl0QnV0dG9uIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2Zvcm0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9jaGVja1ZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX3Nob3dFcnJvciIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJlcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJfaGlkZUVycm9yIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJyZXNldFZhbGlkYXRpb24iLCJlbmFibGVWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJrZXkiLCJjbG9zZSIsImNvbnRhaW5zIiwiX3BvcHVwIiwiYmluZCIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJfaGFuZGxlT3ZlcmxheUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEV2ZW50TGlzdGVuZXJzIiwiUG9wdXBXaXRoRm9ybSIsInBvcHVwIiwic3VibWl0SGFuZGxlciIsInN1cGVyIiwiX3N1Ym1pdEhhbmRsZXIiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsInZhbHVlIiwicmVzZXQiLCJlZGl0UHJvZmlsZU1vZGFsIiwiYWRkTmV3Q2FyZE1vZGFsIiwibGlzdCIsImVkaXRQcm9maWxlRm9ybSIsImFkZENhcmRGb3JtIiwicHJvZmlsZU5hbWVJbnB1dCIsInByb2ZpbGVKb2JJbnB1dCIsImVkaXRQcm9maWxlQnV0dG9uIiwiYWRkY2FyZEJ1dHRvbiIsImluaXRpYWxDYXJkcyIsInJldmVyc2UiLCJzZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiZWxlbWVudCIsIl9lbGVtZW50IiwiYWRkSXRlbSIsInByZXBlbmQiLCJyZW5kZXJDYXJkIiwicHJldmlld0ltYWdlTW9kYWwiLCJpbWFnZUNhcmRNb2RhbCIsImhhbmRsZUltYWdlUHJldmlldyIsImNhcmQiLCJsaXN0SXRlbSIsImdlbmVyYXRlQ2FyZCIsInVzZXJJbmZvIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVKb2JTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsImVkaXRNb2RhbCIsImFkZENhcmRNb2RhbCIsImVkaXRGb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsImFkZENhcmRGb3JtVmFsaWRhdG9yIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlSm9iIiwiZmlsbFByb2ZpbGVGb3JtUHJldmlvdXNJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=