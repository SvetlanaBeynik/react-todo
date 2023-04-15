import React from 'react';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

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
            <label htmlFor="todoTitle"> Title </label>
            <br></br>
            {/* <input name="title" id="todoTitle"></input> */}
            <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange}>
            </input>
            <button> Add </button>
        </form>
    );


};



export default AddTodoForm;