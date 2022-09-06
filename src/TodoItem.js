import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export function TodoItem(props) {

  const onDelete = () => {
    alert('Eliminaste la tarea ' + props.text)
  }

  return (
    <li className='TodoItem-li'>
      <span 
        className={`TodoItem-span__check ${props.completed && 'icon-completed'}`}
        onClick={props.onComplete}
      >
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
      </span>
      <p className={`TodoItem-p ${props.completed && 'p-completed'}`}>{props.text}</p>
      <span 
        className='TodoItem-span__mark'
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </span>
    </li>
  );
}