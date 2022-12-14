import { useLocalStorage } from './useLocalStorage'
import React from 'react';

function useTodos() {

  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1', []);
  
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false)
  
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
      saveTodos(newTodos);
    }
  
    const addTodo = text => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text: text,
      })
      saveTodos(newTodos);
    }

    const deleteTodo = text => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos);
    }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  };
}

export { useTodos }