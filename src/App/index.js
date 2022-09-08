import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from './../TodoContext'

// const deafaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro a react', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
