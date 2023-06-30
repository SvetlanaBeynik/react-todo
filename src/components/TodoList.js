import React from 'react';
import App from '../App';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';


const TodoList = ({ todoList, onRemoveTodo }) => (

    <ul>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}

    </ul>
);

TodoList.propTypes = {
    onRemoveTodo: PropTypes.func,
    todoList: PropTypes.array,
};

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
