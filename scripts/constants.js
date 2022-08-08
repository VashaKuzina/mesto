const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup');
const popupCard = document.querySelector('.popup_type_add');
const containerCard = popupCard.querySelector('.popup__container');
const formProfile = popupProfile.querySelector('.popup__form_type_edit');
const formCard = popupCard.querySelector('.popup__form_type_add');
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

export {profile, profileButton, popupProfile, popups, popupCard, containerCard, formProfile, formCard, nameInput, jobInput, containerProfile, nameProfile, jobProfile, elementTemplate, nameCards, listCards, cardButton, popupView, popupImage, popupCaption, nameCardInput, linkInput, buttonElement}