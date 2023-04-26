import React from 'react';


const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>
            <li>
                {todo.title}
                <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove </button>
            </li>
        </>
    );
};

export default TodoListItem;



// function TodoListItem({ obj }) {
//     return (
//         <><li>
//             {obj.title}
//         </li><button Remove> </button></>

//     );

// }