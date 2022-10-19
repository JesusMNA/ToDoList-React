import React from "react";
import { useTodos } from './useTodos';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError"
import { TodosLoading } from "../TodosLoading"
import { EmptyTodos } from "../EmptyTodos"


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

      <TodoList 
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

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
