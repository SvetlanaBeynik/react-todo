import React from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';
import style from "./TodoListItem.module.css";
import { BiPlus } from "react-icons/bi";

function AddTodoForm({ onAddTodo }) {
    // function InputWithLabel({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    // AddTodoForm.propTypes = {
    //     onAddTodo: PropTypes.func,
    // };

    function handleAddTodo(event) {

        event.preventDefault();
        if (todoTitle === "") {
            return;
        }
        onAddTodo(todoTitle);
        setTodoTitle("");
    }


    return (
        <form onSubmit={handleAddTodo}>
            <div className={style.inputGroupe}>
                <InputWithLabel
                    id="todoTitle"
                    name="Title"
                    value={todoTitle}
                    todoTitle={todoTitle}
                    handleTitleChange={handleTitleChange}> </InputWithLabel>

                <button
                    className={style.addButton}
                    type="submit"
                    aria-label="Add Todo Button"
                >
                    <BiPlus size={'2rem'} />

                </button>
            </div>
        </form>
    );


};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};


export default AddTodoForm;