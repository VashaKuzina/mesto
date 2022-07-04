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
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  };
  
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      inactiveButton(buttonElement, inactiveButtonClass);
    } 
    else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  const inactiveButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  };
  
  const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
     formList.forEach((formElem) => {
      setEventListeners(formElem, {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass});
     })
  }



