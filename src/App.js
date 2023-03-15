import React from 'react'
const todoList = [
  {
    id: 1,
    title: "Complete assignment list"
  },
  {
    id: 2,
    title: "Complete assignment map"
  },
  {
    id: 3,
    title: "Complete assignment objects"
  }
];

function App() {
  const listItems = todoList.map((number) =>
    <li key={number["id"].toString()}>
      {number["title"]}
    </li >
  );
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <div style={{ textAlign: 'center' }}>
          <h1>Todo List</h1>
        </div>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
