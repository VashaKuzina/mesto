const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup');
const coloseButtonEdit = popupEdit.querySelector('.popup__close-button');
const popupAdd = document.querySelector('.popup_type_add');
const formElementAdd = popupAdd.querySelector('.popup__container');
const coloseButtonAdd = popupAdd.querySelector('.popup__close-button');
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input-text_type_name');
const jobInput = popupEdit.querySelector('.popup__input-text_type_job');
const formElement =popupEdit.querySelector('.popup__container');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__status');
const elementTemplate = document.querySelector('#element-template').content;
const likeButton = document.querySelector('.element__like-button');
const imageCards = document.querySelector('.element__image');
const nameCards = document.querySelector('.element__name');
const listCards = document.querySelector('.elements');
const addButton = profile.querySelector('.profile__add-button');
const popupView = document.querySelector('.popup_type_view');
const popupImage = popupView.querySelector('.popup__image');
const popupCaption = popupView.querySelector('.popup__caption');
const coloseButtonView = popupView.querySelector('.popup__close-button');
const nameCardInput = popupAdd.querySelector('.popup__input-text_type_name-card');
const linkInput = popupAdd.querySelector('.popup__input-text_type_link');

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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function showPopupEdit() {
  openPopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  listCards.prepend(createCard (nameCardInput.value, linkInput.value));
  formAdd.reset();
  closePopup(popupAdd);
}

function createCard(name, link) {
  const initialCardsElement = elementTemplate.querySelector('.element').cloneNode(true);

  initialCardsElement.querySelector('.element__name').textContent = name;
  initialCardsElement.querySelector('.element__image').src = link;
  initialCardsElement.querySelector('.element__image').alt = name;

  initialCardsElement.querySelector('.element__delete-button').addEventListener('click', function() {
    initialCardsElement.remove();
  });

  initialCardsElement.querySelector('.element__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_active');
});

initialCardsElement.querySelector('.element__image').addEventListener('click', () => {
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

editButton.addEventListener('click', showPopupEdit);

addButton.addEventListener('click', () => openPopup(popupAdd));

formElement.addEventListener('submit', handleProfileFormSubmit);

formElementAdd.addEventListener('submit', handleCardFormSubmit);

popups.forEach((popups) => {
    popups.addEventListener('click', (evt) => {
       if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popups)
        }
    })
}) 






