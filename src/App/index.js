import React from "react";
import { useTodos } from './useTodos';
import { TodoCounter } from "../TodoCounter";
import { SqueletonLoading } from "../SqueletonLoading";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";


function App() {

  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  return(
    <React.Fragment>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>There was a mistake</p>}
        {loading && (
          <SqueletonLoading></SqueletonLoading>
        )}
        {(!loading && !searchTodos.length) && <p>Create your first To do</p>}

        {searchTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal &&  (
        <Modal
          addTodo={addTodo}
          setOpenModal={setOpenModal}
        >
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
}

export default App;
