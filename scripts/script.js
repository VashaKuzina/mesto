let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let coloseButton = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('.popup__input-text_name');
let jobInput = popup.querySelector('.popup__input-text_job');
let formElement =popup.querySelector('.popup__submit-button');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__status');
let likeButton = document.querySelector('.element__like-button');
console.log(likeButton);


editButton.addEventListener('click', showPopup);

function showPopup() {
  popup.classList.add('popup_opend');
}

coloseButton.addEventListener('click', closePopup);

function closePopup() {
  popup.classList.remove('popup_opend');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
  console.log('Ghbdtn');
}

formElement.addEventListener('click', formSubmitHandler); 

likeButton.addEventListener('click', likeActive);

function likeActive() {
  likeButton.classList.remove('element__like-button_disabled');
  likeButton.classList.add('element__like-button_active');
}
