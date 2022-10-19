import React from 'react';
import './TodoCounter.css'

export function TodoCounter({ totalTodos, completedTodos}) {

  return (
    <div className='TodoCounter-container'>
      <h2 className='TodoCounter-text'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </div>
  );
}