import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoCounter.css'

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <div className='TodoCounter-container'>
      <h2 className='TodoCounter-text'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </div>
  );
}