import React from "react";
import { AppUi } from "./AppUi";

const deafaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {

  const [todos, setTodos] = React.useState(deafaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    const todoCompleted = newTodos[todoIndex].completed;
    if (todoCompleted) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    setTodos(newTodos);
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }

  return (
    <AppUi 
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
