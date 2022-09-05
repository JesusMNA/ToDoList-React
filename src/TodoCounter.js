import './TodoCounter.css'

export function TodoCounter({ total, completed }) {


  return (
    <div className='TodoCounter-container'>
      <h2 className='TodoCounter-text'>Has completado {completed} de {total} TODOs</h2>
    </div>
  );
}