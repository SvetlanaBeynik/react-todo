import React, { useRef, useEffect } from 'react'


const InputWithLabel = (props) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();

    });
    return (
        <>
            <label htmlFor="todoTitle"> {props.children} </label>
            <input name="Title"
                id="todoTitle"
                ref={inputRef}
                value={props.todoTitle}
                onChange={props.handleTitleChange}></input>
        </>
    )

}

export default InputWithLabel;