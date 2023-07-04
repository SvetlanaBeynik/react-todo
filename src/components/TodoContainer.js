import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import propTypes from 'prop-types';
// import { ReactComponent as Sort } from '../img/arrow-sort-24-filled.svg';


function TodoContainer({ tableName, baseName, apiKey }) {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState('asc');



    const fetchData = async () => {
        console.log(process.env.REACT_APP_AIRTABLE_API_KEY)
        // Sort by Airtable view order
        // const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view`;
        // Sort by Airtable field asc
        // const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?sort[0][field]=title&[sortDirection]=asc`;
        const url = `https://api.airtable.com/v0/${baseName}/${tableName}?sort[0][field]=title&sort[0][direction]=${sortDirection}`;

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        };
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();




            // // Sort with JavaScript A - Z
            // function sortTodos(a, b) {
            //     if (a.title > b.title) {
            //         return 1;
            //     }
            //     if (a.title < b.title) {
            //         return -1;
            //     }
            //     return 0;
            // }

            // Sort with JavaScript Z-A
            // function sortTodos(a, b) {
            //     if (a.title > b.title) {
            //         return -1;
            //     }
            //     if (a.title < b.title) {
            //         return 1;
            //     }
            //     return 0;
            // }

            const todos = data.records.map((todo) => {
                return {
                    id: todo.id,
                    title: todo.fields.title
                };
            });
            // setTodoList(todos.sort(sortTodos));
            setTodoList(todos);
            setIsLoading(false);

        } catch (error) {
            console.log(error.message, [sortDirection, setSortDirection]);



        };
    }

    useEffect(() => {
        fetchData();

    }, [sortDirection]);

    useEffect(() => {
        if (!isLoading)
            localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

    function addTodo(newTodo) {
        setTodoList([...todoList, newTodo])
    };

    const removeTodo = (id) => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    };
    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    return (
        <>
            <h1>{tableName}</h1>
            <button onClick={toggleSortDirection}>
                {/* <span style={{ display: 'none' }}></span> */}
                Sort: {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                {/* <Sort /> */}
            </button>
            <hr />


            <div style={{
                // textAlign: 'left',
                textAlign: 'center'
            }}>
                <h1>New Todo List</h1>
                <hr />

            </div>
            <AddTodoForm onAddTodo={addTodo}></AddTodoForm>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}

            {/* <label className="switch" htmlFor="switch">
                A-to-Z
            </label>

            <input
                id="switch"
                type="checkbox"
                checked={sortDirection}
                onChange={() => sortDirection(!setSortDirection)} */}
            {/* /> */}
            {/* </header> */}
        </>


    )
    console.log(toggleSortDirection);

}


export default TodoContainer

