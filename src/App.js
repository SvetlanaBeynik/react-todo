import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    console.log(process.env.REACT_APP_AIRTABLE_API_KEY)
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();


      const todos = data.records.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.title
        };
      });
      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message);

    };
  }

  useEffect(() => {
    fetchData();

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={
            <header>
              <div style={{
                // textAlign: 'left',
                textAlign: 'center'
              }}>
                <h1>New Todo List</h1>
                <hr />
              </div>
              <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </header>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

//   <header>
//     <div style={{
//       // textAlign: 'left',
//       textAlign: 'center'
//     }}>
//       <h1>New Todo List</h1>
//       <hr />
//     </div>
//     <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
//     {isLoading ? (
//       <p>Loading...</p>
//     ) : (
//       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//     )}
//   </header>
// }


export default App;

/* <Route
exact
path="/new"
element={

<header>
  <div style={{
    // textAlign: 'left',
    textAlign: 'center'
  }}>
    <h1>New Todo List</h1>
    <hr />
  </div>
  <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
  )}
</header>
}
></Route> */
