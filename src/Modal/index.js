import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

function Modal({ children }) {

	return ReactDOM.createPortal(
      <div className='modal-addTodo'>
        <div className='modal-container'>
          <p>Create new Todo</p>
          <input type='text' placeholder='New todo'></input>
          <div className='buttons-container'>
            <button className='add' type='button'>Add</button>
          </div>
        </div>
        {children}
		  </div>,
		document.getElementById('modal')
	);
}

export { Modal }