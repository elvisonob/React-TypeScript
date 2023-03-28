import React, { useContext } from 'react';
import Todo from '../models/todo';
import TodoList from './TodoList';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemove={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
