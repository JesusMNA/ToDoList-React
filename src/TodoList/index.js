import './TodoList.css'

export function TodoList(props) {
  return (
    <div className="TodoList-container">
      <section className="TodoList-section">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchTodos.length) && props.onEmptyTodos()}

        {props.searchTodos.map(props.render)}

        <ul className="TodoList-ul">
          {props.children}
        </ul>
      </section>
    </div>
  );
}