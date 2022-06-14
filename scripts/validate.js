const form = document.querySelector('.popup__form');

const showInputError = (formElem, inputElement, errorMessage) => {
    const errorElement = formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input-text_type_error');
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (formElem, inputElement) => {
    const errorElement = formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input-text_type_error');
    errorElement.textContent = '';
  }; 
  
  const isValid = (formElem, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElem, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElem, inputElement);
    }
  }; 
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
     
     return !inputElement.validity.valid;
   })
  };
  
  const setEventListeners = (formElem) => {
    const inputList = Array.from(formElem.querySelectorAll('.popup__input-text'));
    const buttonElement = formElem.querySelector('.popup__submit-button');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElem, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-button_inactive');
  } else {
    buttonElement.classList.remove('popup__submit-button_inactive');
  }
  };
  
  const enableValidation = (formElem) => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
     formList.forEach((formElem) => {
      formElem.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
        setEventListeners(formElem);
    });
  }
  
  enableValidation (form);