import React, { useState, useEffect } from 'react'
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
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };
  return (
    <>

      <header>
        <div style={{
          // textAlign: 'left',
          textAlign: 'center'
        }}>
          <h1>Todo List</h1>
          <hr />
        </div>
        <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </header>
    </>

  );
};

export default App;
