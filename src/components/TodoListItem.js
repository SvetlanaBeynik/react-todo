import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import style from "./TodoListItem.module.css";


const TodoListItem = ({ todo, onRemoveTodo, updateData }) => {
    const [editing, setEditing] = useState(true)
    const [newTitle, setNewTitle] = useState(todo.title)

    const editItem = (event) => {
        const editedTitle = event.target.value;
        setNewTitle(editedTitle)
    }

    const handleEditItem = (event) => {
        event.preventDefault();
        if (newTitle === "" || newTitle === " ") {
            alert("Write something!")
        } else {
            setEditing(true);
            updateData(newTitle, todo.id);
        }
    };

    return (
        // <div className={style.container}>
        <>{editing ? (
            <div className={style.conditionalContainer}>
                <p className={style.label}>
                    {newTitle}
                </p>
                <div className={style.groupeBtn}>
                    <button
                        className={`${style.btn} ${style.editBtn}`}
                        onClick={() => setEditing(false)}>
                    </button>
                    <button
                        className={`${style.btn} ${style.removeBtn}`}
                        onClick={() => onRemoveTodo(todo.id)}>
                    </button>
                </div>
            </div>
        ) : (
            <form
                onSubmit={handleEditItem}
                className={`${style.conditionalContainer} ${style.editForm}`}
            >
                <input
                    className={style.formInput}
                    value={newTitle}
                    onChange={editItem}>

                </input>
                <button
                    className={`${style.btn} ${style.saveBtn}`}
                    type="submit">
                </button>
            </form>

        )}

            {/* //  </div > */}
        </>
    );
};

export default TodoListItem;

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveItem: PropTypes.func,
    updateDate: PropTypes.func,

}
// import React from 'react';
// import style from "./TodoListItem.module.css";
// import PropTypes from 'prop-types';



// const TodoListItem = ({ todo, onRemoveTodo }) => {
//     return (
//         <>

//             <li className={style.ListItem}>
//                 {todo.title}
//                 <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove </button>
//             </li>
//         </>
//     );
// };

// TodoListItem.propTypes = {
//     id: PropTypes.string,
//     onRemoveTodo: PropTypes.func,
//     title: PropTypes.object,
// };

// export default TodoListItem;



// function TodoListItem({ obj }) {
//     return (
//         <><li>
//             {obj.title}
//         </li><button Remove> </button></>

//     );

//  }