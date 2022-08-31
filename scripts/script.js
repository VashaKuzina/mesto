import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {configFormSelectors} from "./configFormSelectors.js";
import {profile, 
        profileButton, 
        popupProfile, 
        popups, 
        popupCard,
        containerCard, 
        formProfile, 
        formCard, 
        nameInput, 
        jobInput, 
        containerProfile, 
        nameProfile, 
        jobProfile, 
        elementTemplate,
        nameCards, 
        listCards, 
        cardButton, 
        popupView, 
        popupImage, 
        popupCaption, 
        nameCardInput, 
        linkInput, 
        buttonElement} from "./constants.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeByEsc);
}

function showPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  profileFormValidator.inactiveButton();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

function showPopupView() {
  openPopup(popupView);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard(nameCardInput.value, linkInput.value);
  listCards.prepend(cardElement);
  formCard.reset();
  closePopup(popupCard);
  }
  
  initialCards.forEach((initialCards) => {
    const cardElement = createCard(initialCards.name, initialCards.link);
    listCards.append(cardElement);
  });

function createCard(name, link) {
  const card = new Card(name, link, '#element-template', showPopupView, popupImage, popupCaption);
  const cardElement = card.generateCard();
  return cardElement;
}

const profileFormValidator = new FormValidator(configFormSelectors, formProfile);
console.log(profileFormValidator);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(configFormSelectors, formCard);
cardFormValidator.enableValidation();

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  


profileButton.addEventListener('click', showPopupProfile);

cardButton.addEventListener('click', () =>{
openPopup(popupCard);
cardFormValidator.resetValidation();
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

formCard.addEventListener('submit', handleCardFormSubmit);

popups.forEach((popups) => {
  popups.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) { 
  closePopup(popups) 
    }
  })
})




