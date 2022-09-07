import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import React from "react";

export function AppUi({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
}) {
  return(
    <React.Fragment>
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>There was a mistake</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchTodos.lenght) && <p>Create your first To do</p>}

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
      <CreateTodoButton />
    </React.Fragment>
  );
}