import React, { useState } from 'react';
import Todos from './components/Todos';
import TodosProvider from './store/todos-context';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
