const showInputError = (formElem, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (formElem, inputElement, inputErrorClass) => {
    const errorElement = formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  }; 
  
  const isValid = (formElem, inputElement, inputErrorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElem, inputElement, inputElement.validationMessage, inputErrorClass);
    } else {
      hideInputError(formElem, inputElement, inputErrorClass);
    }
  }; 
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
     
     return !inputElement.validity.valid;
   })
  };
  
  const setEventListeners = (formElem, {inputSelector, submitButtonSelector, inactiveButtonClass , inputErrorClass}) => {
    
    const inputList = Array.from(formElem.querySelectorAll(inputSelector)); 
    const buttonElement = formElem.querySelector(submitButtonSelector); 
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        isValid(formElem, inputElement, inputErrorClass);
        console.log(formElem);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };
  
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } 
    else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  };
  
  const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
     formList.forEach((formElem) => {
      formElem.addEventListener('submit', function (evt) {
        evt.preventDefault();
        });
      setEventListeners(formElem, {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass});
    });
  }

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__error_visible'
  });