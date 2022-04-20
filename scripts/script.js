let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let coloseButton = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('.popup__input-text_type_name');
let jobInput = popup.querySelector('.popup__input-text_type_job');
let formElement =popup.querySelector('.popup__container');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__status');
let likeButton = document.querySelector('.element__like-button');

function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', showPopup);

formElement.addEventListener('submit', formSubmitHandler);

coloseButton.addEventListener('click', closePopup);



