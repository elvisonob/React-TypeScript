import React from 'react';
import Todo from '../models/todo';
import TodoList from './TodoList';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoList key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
