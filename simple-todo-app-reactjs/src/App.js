import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="container-fluid todoApp">
      <div className="row">
        <h1 className="text-center font-weight-lighter display-6 col-md-12 py-5 text-uppercase text-primary">
          Simple todo app
        </h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
