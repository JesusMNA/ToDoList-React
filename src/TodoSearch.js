import './TodoSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function TodoSearch() {
  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-box">
        <button type="button" className="TodoSearch-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input className="TodoSearch-input" placeholder="Cebolla"></input>
      </div>
    </div>
  );
}