import React from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

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
        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });

        console.log(todoTitle);
        setTodoTitle('')

    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id="todoTitle"
                name="Title"
                value={todoTitle}
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}> </InputWithLabel>

            <button type="submit"> Add </button>
        </form>
    );


};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
};


export default AddTodoForm;