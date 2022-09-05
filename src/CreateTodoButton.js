import './CreateTodoButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { logDOM } from '@testing-library/react';

export function CreateTodoButton(props) {

  const onCLick = (msg) => {
    alert(msg)
  }

  return(
    <div className="CreateTodoButton-container">
      <button 
        className="CreateTodoButton-button"
        onClick={() => onCLick('Hola muy buenas a todos')}
      >
        <FontAwesomeIcon className='icon' icon={faCirclePlus} />
      </button>
    </div>
  );
}