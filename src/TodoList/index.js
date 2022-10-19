import './TodoList.css'

export function TodoList(props) {

  const renderFunc = props.children || props.render;

  return (
    <div className="TodoList-container">
      <section className="TodoList-section">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchTodos.length) && props.onEmptySearchResults(props.searchText)}

        {props.searchTodos.map(renderFunc)}

        <ul className="TodoList-ul">
          {props.children}
        </ul>
      </section>
    </div>
  );
}