import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

const TodoApp = () => {
  const [state, setState] = useState([
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
    setState([...state, e]);
  };
  const handleClick = (e) => {
    const objIndex = state.findIndex((obj) => obj.id == e);
    let newArr = [...state];
    state[objIndex].completed = true;

    setState(newArr);
  };
  return (
    <div className="col-md-5 text-center mx-auto">
      <Form handleChange={handleChange} lists={state} />
      <TodoList handleClick={handleClick} lists={state} />
    </div>
  );
};

export default TodoApp;
