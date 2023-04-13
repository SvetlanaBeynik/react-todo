import React from 'react';
import TodoListItem from './TodoListItem';




const TodoList = ({ todoList }) => {
    return (
        <div>
            <ul>

                {todoList.map((obj) => (
                    < TodoListItem obj={obj} key={obj.id} />
                ))}

            </ul>
        </div >
    );


};
export default TodoList;