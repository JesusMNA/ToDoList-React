import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

function Modal({ children, setOpenModal, addTodo }) {

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const button = document.getElementById('createButtonTodo')

  const onSubmit = () => {
    addTodo(newTodoValue)
    setOpenModal(false)
    button.classList.remove('CreateTodoButton-button--close')
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

	return ReactDOM.createPortal(
      <div className='modal-addTodo'>
        <div className='modal-container'>
          <p>Create new Todo</p>
          <input 
            value={newTodoValue}  
            onChange={onChange}
            type='text' 
            placeholder='New todo'
          />
          <div className='buttons-container'>
            <button 
              className='add' 
              type='button'
              onClick={onSubmit}
            >
              Add
            </button>
          </div>
        </div>
        {children}
		  </div>,
		document.getElementById('modal')
	);
}

export { Modal }