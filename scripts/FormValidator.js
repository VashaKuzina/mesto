export default class FormValidator {
    constructor(formSelector, formElem) {
      this._formSelector = formSelector;
      this._formElem = formElem;
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElem.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._formSelector.inputErrorClass);
      errorElement.textContent = errorMessage;
    };
    
    _hideInputError(inputElement) {
      const errorElement = this._formElem.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._formSelector.inputErrorClass);
      errorElement.textContent = '';
    }; 
  
    _isValid(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
  
    _hasInvalidInput = (inputList) => { 
      return inputList.some((inputElement) => {
       
       return !inputElement.validity.valid;
     });
    };
  
    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this.inactiveButton();
      } 
      else {
        this._buttonElement.classList.remove(this._formSelector.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
      }
    };
  
    inactiveButton() {
      this._buttonElement.classList.add(this._formSelector.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    };
  
    _setEventListeners() {
      this._inputList = Array.from(this._formElem.querySelectorAll(this._formSelector.inputSelector)); 
      this._buttonElement = this._formElem.querySelector(this._formSelector.submitButtonSelector); 
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement, this.inactiveButtonClass);
        });
      });
    }
  
    enableValidation() {
        this._formElem.addEventListener("sumbit", (evt) => {
            evt.preventDefault();
        })
          this._setEventListeners();
       
    }
  
  }