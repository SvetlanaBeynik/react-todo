import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';


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

InputWithLabel.propTypes = {
    handleTitleChange: PropTypes.func,
    todoTitle: PropTypes.object,
    children: PropTypes.bool,
};

export default InputWithLabel;