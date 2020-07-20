import React from 'react';

const TodoList = (props) => {
  const { lists } = props;
  return (
    <div className="todoList">
      {lists.map((list) => (
        <div
          className="list d-flex align-items-center justify-content-center p-0"
          key={list.id}>
          {list.completed ? (
            <React.Fragment>
              <p
                className="font-weight-bold mt-3 text-center"
                style={{ textDecoration: 'line-through' }}>
                {list.todo}
              </p>
              <i
                className="fa fa-trash text-danger"
                aria-hidden="true"
                style={{ cursor: 'Pointer' }}></i>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input
                type="checkbox"
                onClick={() => props.handleClick(list.id)}
              />
              <p className="font-weight-bold mt-3 text-center">{list.todo}</p>
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
