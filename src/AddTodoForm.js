import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle"> Title </label>
            <br></br>
            <input name="title" id="todoTitle"></input>
            <button> Add </button>
        </form>
    );


};

export default AddTodoForm;