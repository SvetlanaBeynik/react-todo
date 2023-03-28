import React from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <div style={{ textAlign: 'center' }}>
          <h1>Todo List</h1>
          <hr />
        </div>
        <TodoList></TodoList>
        <AddTodoForm onAddTodo={setNewTodo}></AddTodoForm>
        <p> {newTodo} </p>
      </header>
    </div>
  );
}

export default App;