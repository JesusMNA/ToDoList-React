import './CreateTodoButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export function CreateTodoButton(props) {
  return(
    <div className="CreateTodoButton-container">
      <button className="CreateTodoButton-button"><FontAwesomeIcon className='icon' icon={faCirclePlus} /></button>
    </div>
  );
}