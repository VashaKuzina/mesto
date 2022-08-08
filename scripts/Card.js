export default class Card{
    constructor(name, link, templateSelector, handleCardClick, popupImage, popupCaption) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._popupCaption = popupCaption;
      this._popupImage = popupImage; 
    }
  
    _getTemplate() {
  
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
      console.log(cardElement);
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
  
      this._element.querySelector('.element__name').textContent = this._name;
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__name').alt = this._name;

      return this._element;
    }

    _setEventListeners() {
      this._element.querySelector('.element__like-button').addEventListener('click', () => {
        this._handleLikeClick();
      });

      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._handleRemoveClick();
      });

      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handlePopupViewClick();
      });
    }

    _handleLikeClick(){
      this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }
    
    _handleRemoveClick(){
      this._element.remove();
    }
    
    _handlePopupViewClick() {
      this._handleCardClick();
      this._popupImage.src = this._link;
      this._popupCaption.textContent = this._name;
      this._popupImage.alt = this._name;
      };
    }

