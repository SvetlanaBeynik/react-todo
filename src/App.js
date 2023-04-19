import React, { useState, useEffect, Fragment } from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];


}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  // const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem('savedTodoList')));

  // React.useEffect(() => {
  //   localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  // }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <>

      <header>

        <div style={{
          textAlign: 'left',
          textAlign: 'center'
        }}>
          <h1>Todo List</h1>
          <hr />
        </div>


        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
        <TodoList todoList={todoList}></TodoList>

      </header>
    </>

  );
}

export default App;
