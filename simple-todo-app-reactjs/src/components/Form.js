import React, { useState } from 'react';

const Form = (props) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.lists[props.lists.length - 1].id + 1,
      todo,
      completed: false,
    };

    props.handleChange(data);
    setTodo('');
  };
  return (
    <div className="form  py-2">
      <form className="AddForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mx-2"
            name="todo"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Form;
