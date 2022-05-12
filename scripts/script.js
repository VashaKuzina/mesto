const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const coloseButtonEdit = popupEdit.querySelector('.popup__close-button');
const popupAdd = document.querySelector('.popup_type_add');
const formElementAdd = popupAdd.querySelector('.popup__container');
const coloseButtonAdd = popupAdd.querySelector('.popup__close-button');
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


function showPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function showPopupAdd() {
  popupAdd.classList.add('popup_opened');

}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function closePopupView() {
  popupView.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopupEdit();
}

function formSubmitCard(evt) {
  evt.preventDefault();
  const nameCardInput = popupAdd.querySelector('.popup__input-text_type_name-card');
  const linkInput = popupAdd.querySelector('.popup__input-text_type_link');
  renderCard (nameCardInput.value, linkInput.value );
  nameCardInput.value = '';
  linkInput.value = '';
  closePopupAdd();
}

function renderCard (nameCard, linkCard) {
  const initialCardsElement = elementTemplate.querySelector('.element').cloneNode(true);

  initialCardsElement.querySelector('.element__name').textContent = nameCard;
  initialCardsElement.querySelector('.element__image').src = linkCard;

  initialCardsElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
});

initialCardsElement.querySelector('.element__delete-button').addEventListener('click', function() {
  initialCardsElement.remove();
});

initialCardsElement.querySelector('.element__image').addEventListener('click', function() {
  popupView.classList.add('popup_opened');
  popupImage.src = linkCard;
  popupCaption.textContent = nameCard;
});

  listCards.append(initialCardsElement);
}

initialCards.forEach(function(element) {
  const initialCardsElement = elementTemplate.querySelector('.element').cloneNode(true);

  initialCardsElement.querySelector('.element__name').textContent = element.name;
  initialCardsElement.querySelector('.element__image').src = element.link;

  initialCardsElement.querySelector('.element__delete-button').addEventListener('click', function() {
    initialCardsElement.remove();
  });

  initialCardsElement.querySelector('.element__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_active');
});

initialCardsElement.querySelector('.element__image').addEventListener('click', function() {
  popupView.classList.add('popup_opened');
  popupImage.src = element.link;
  popupCaption.textContent = element.name;
});

  listCards.append(initialCardsElement);
});


editButton.addEventListener('click', showPopupEdit);

addButton.addEventListener('click', showPopupAdd);

formElement.addEventListener('submit', formSubmitHandler);

coloseButtonEdit.addEventListener('click', closePopupEdit);

coloseButtonAdd.addEventListener('click', closePopupAdd);

coloseButtonView.addEventListener('click', closePopupView);

formElementAdd.addEventListener('submit', formSubmitCard);






