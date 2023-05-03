import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({
        data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) }
      }), 2000)

    ).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading)
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
      </header>
    </>

  );

};

export default App;






