import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TodoList from './components/TodoList';
// import AddTodoForm from './components/AddTodoForm';
import TodoContainer from './components/TodoContainer'

const tableName = process.env.REACT_APP_TABLE_NAME;
const baseName = process.env.REACT_APP_AIRTABLE_BASE_ID;
const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer tableName={tableName} baseName={baseName} apiKey={apiKey} />}

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
