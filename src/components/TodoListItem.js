import React from 'react';
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';


const TodoListItem = ({ todo, onRemoveTodo }) => {
    return (
        <>

            <li className={style.ListItem}>
                {todo.title}
                <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove </button>
            </li>
        </>
    );
};

TodoListItem.propTypes = {
    id: PropTypes.string,
    onRemoveTodo: PropTypes.func,
    title: PropTypes.object,
};

export default TodoListItem;



// function TodoListItem({ obj }) {
//     return (
//         <><li>
//             {obj.title}
//         </li><button Remove> </button></>

//     );

// }