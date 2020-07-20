import React from 'react';

const TodoList = (props) => {
  const { lists } = props;
  return (
    <div className="todoList">
      {lists.map((list) => (
        <div
          className="list d-flex align-items-center justify-content-center p-0"
          key={list.id}>
          <input type="checkbox" />
          <p className="font-weight-bold mt-3 text-center">{list.todo}</p>
          {list.checked ? (
            <i className="fa fa-trash" aria-hidden="true"></i>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
