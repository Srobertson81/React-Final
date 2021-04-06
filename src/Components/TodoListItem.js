import React from 'react';

//TodoListItem passes onRemovePressed and onCompletedPressed to each item as prop uses button onClick function calls them with text of todo 
//to remove a task or mark it completed. It also adds created on date.  
const TodoListItem =({ todo,  onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        { console.log( todo) }
       <h4>{todo.text}</h4>
       <p>Created On:&nbsp;
           {(new Date(todo.createdAt)).toLocaleDateString()}
       </p>
       <div className="button-container">
           {todo.isCompleted
                ? null
                : <button 
                    onClick={() => onCompletedPressed(todo.id)}
                    className="completed-button">Mark As Completed</button>}
            <button
                onClick={() =>{console.log(todo)
                return onRemovePressed(todo.id)}}
                className="remove-button">Remove</button>           
       </div>       
    </div>
);
export default TodoListItem;