import './CreateTodoButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { logDOM } from '@testing-library/react';
import { TodoContext } from '../TodoContext';
import React from 'react';

export function CreateTodoButton() {

  const { setOpenModal, openModal } = React.useContext(TodoContext);
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
        className="CreateTodoButton-button CreateTodoButton-button--close"
        onClick={onCLick}
        id='createButtonTodo'
      >
        <FontAwesomeIcon className='icon' icon={faCirclePlus} />
      </button>
    </div>
  );
}