import React from 'react';

const Form = () => {
  return (
    <div className="form  py-2">
      <form className="AddForm">
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control mx-2"
            name="todo"
            placeholder="Enter todo"
          />
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Form;
