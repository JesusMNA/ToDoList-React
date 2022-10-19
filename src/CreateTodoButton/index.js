import './CreateTodoButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export function CreateTodoButton({ setOpenModal, openModal }) {

  const button = document.getElementById('createButtonTodo');

  const onCLick = () => {
    setOpenModal(prevState => !prevState)
    if(openModal) {
      button.classList.remove('CreateTodoButton-button--close')
    }
    else {
      button.classList.add('CreateTodoButton-button--close')
    }
  }

  return(
    <div className="CreateTodoButton-container">
      <button 
        className="CreateTodoButton-button"
        onClick={onCLick}
        id='createButtonTodo'
      >
        <FontAwesomeIcon className='icon' icon={faCirclePlus} />
      </button>
    </div>
  );
}