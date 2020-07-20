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
      completed: true,
    },
  ]);
  const handleChange = (e) => {
    setstate([...state, e]);
  };
  return (
    <div className="col-md-5 text-center mx-auto">
      <Form handleChange={handleChange} lists={state} />
      <TodoList lists={state} />
    </div>
  );
};

export default TodoApp;
