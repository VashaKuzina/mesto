const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup');
const popupCard = document.querySelector('.popup_type_add');
const containerCard = popupCard.querySelector('.popup__container');
const formCard = popupCard.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input-text_type_name');
const jobInput = popupProfile.querySelector('.popup__input-text_type_job');
const containerProfile = popupProfile.querySelector('.popup__container');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__status');
const elementTemplate = document.querySelector('#element-template').content;
const nameCards = document.querySelector('.element__name');
const listCards = document.querySelector('.elements');
const cardButton = profile.querySelector('.profile__add-button');
const popupView = document.querySelector('.popup_type_view');
const popupImage = popupView.querySelector('.popup__image');
const popupCaption = popupView.querySelector('.popup__caption');
const nameCardInput = popupCard.querySelector('.popup__input-text_type_name-card');
const linkInput = popupCard.querySelector('.popup__input-text_type_link');
const buttonElement = popupCard.querySelector('.popup__submit-button');

const configFormSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(configFormSelectors);

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
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  listCards.prepend(createCard (nameCardInput.value, linkInput.value));
  formCard.reset();
  closePopup(popupCard);
  }

function createCard(name, link) {
  const initialCardsElement = elementTemplate.querySelector('.element').cloneNode(true);
  const imageCards = initialCardsElement.querySelector('.element__image');

  initialCardsElement.querySelector('.element__name').textContent = name;
  imageCards.src = link;
  imageCards.alt = name;

  initialCardsElement.querySelector('.element__delete-button').addEventListener('click', function() {
    initialCardsElement.remove();
  });

  initialCardsElement.querySelector('.element__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_active');
});

imageCards.addEventListener('click', () => {
  openPopup(popupView);
  popupImage.src = link;
  popupCaption.textContent = name;
  popupImage.alt = name;
});
return initialCardsElement
}

initialCards.forEach((initialCards) => {
  listCards.append(createCard (initialCards.name, initialCards.link));
})

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  


profileButton.addEventListener('click', showPopupProfile);

cardButton.addEventListener('click', () =>{
openPopup(popupCard);
inactiveButton(buttonElement,configFormSelectors.inactiveButtonClass);
});

containerProfile.addEventListener('submit', handleProfileFormSubmit);

containerCard.addEventListener('submit', handleCardFormSubmit);

popups.forEach((popups) => {
    popups.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_opened')) { 
        closePopup(popups) 
      }
    })
})




