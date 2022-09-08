import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import React from "react";

export function AppUi() {
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchTodos,
          completeTodo,
          deleteTodo,
        }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}