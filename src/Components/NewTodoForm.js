import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';

//form to take input from user and to create a new todo task with button onClick function. Then makes sure it is not a duplicate task by checking for an exact value
const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Put your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button 
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    } 
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    );
};
// takes state object returns new object(todos) with parts of state that our NewTodoForm needs access to
const mapStateToProps = state => ({
    todos: getTodos(state),
});
//takes dispatch argument instead of state which allows components to trigger action to add a new todo when the button is pressed 
//so that the Redux store will respond to it
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});
//uses Redux connect function takes mapStateToProps and mapDispatchToProps connects them to the NewTodoForm component and returns connected version of NewTodoForm
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
