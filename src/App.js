import React from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <div style={{ textAlign: 'center' }}>
          <h1>Todo List</h1>
        </div>
        <TodoList></TodoList>
        <AddTodoForm></AddTodoForm>
      </header>
    </div>
  );
}

export default App;