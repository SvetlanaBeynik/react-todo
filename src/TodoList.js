import React from 'react';
import TodoListItem from './TodoListItem';
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

function TodoList() {
    return (
        <div>
            <ul>
                {
                    todoList.map(function (todo) {
                        return <TodoListItem key={todo.id} title={todo.title}></TodoListItem>
                    })
                }
            </ul>
        </div>
    );
    // const listItems = todoList.map((item) =>
    //     <li key={item["id"]}>
    //         {item["title"]}
    //     </li >
    // );

    // return (
    //     <ul>{listItems}</ul>
    // );

}
export default TodoList;