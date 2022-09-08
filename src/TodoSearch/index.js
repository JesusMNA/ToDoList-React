import './TodoSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { TodoContext } from '../TodoContext'

export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-box">
        <label className="TodoSearch-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
        <input 
          className="TodoSearch-input" 
          placeholder="Cebolla"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
}