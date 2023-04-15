import React, { useState } from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <div style={{ textAlign: 'center' }}>
          <h1>Todo List</h1>
          <hr />
        </div>

        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
        <TodoList todoList={todoList}></TodoList>

      </header>
    </div>
  );
}

export default App;
