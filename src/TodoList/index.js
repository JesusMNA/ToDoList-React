import './TodoList.css'

export function TodoList(props) {
  return (
    <div className="TodoList-container">
      <section className="TodoList-section">
        <ul className="TodoList-ul">
          {props.children}
        </ul>
      </section>
    </div>
  );
}