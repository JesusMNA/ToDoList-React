import React from 'react';
import './TodoCounter.css'

export function TodoCounter({ totalTodos, completedTodos, loading}) {

  return (
    <div className='TodoCounter-container'>
      <h2 
        className={`TodoCounter-text ${!!loading && "TodoCounter-text--loading"}`}
      >
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}