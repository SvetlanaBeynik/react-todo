import React from 'react';
import App from './App';
import TodoListItem from './TodoListItem';


const TodoList = ({ todoList, onRemoveTodo }) => (

    <ul>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}

    </ul>
);
export default TodoList;




// const TodoList = ({todoList}) => {
//     return (
//         <div>
//             <ul>

//                 {todoList.map((obj) => (
//                     < TodoListItem obj={obj} key={obj.id} />
//                 ))}

//             </ul>
//         </div >
//     );


// };
