import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setstate] = useState([
    {
      id: 1,
      todo: 'Code',
      completed: false,
    },
    {
      id: 2,
      todo: 'Eat',
      completed: false,
    },
    {
      id: 3,
      todo: 'Repeat',
      completed: false,
    },
    {
      id: 4,
      todo: 'Google',
      completed: false,
    },
  ]);
  return (
    <div className="col-md-5 text-center mx-auto">
      <Form />
      <TodoList lists={state} />
    </div>
  );
};

export default TodoApp;
