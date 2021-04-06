import { 
    createTodo, removeTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure, markTodoAsCompleted } from './actions';
//----thunks await fetches for api for responses regarding post to create and update todos and delete method to remove todos-----

// loads todos in api database by using fetch if needed dispatches errors from api communication.  Takes dispatch argument and displays api errors.
//uses try catch block incase fetching does not work to catch the error.
export const loadTodos = () => async (dispatch) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }    
}
//function that takes text/dispatch argument creates todo and adds a unique id and initial state in the api database displays api errors.
//uses try catch block incase fetching does not work to catch the error.
export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body, 
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));   
    }
}
//function that takes id/dispatch argument and deletes todo with specific id from api database and displays api errors.  
//Uses try catch block incase fetching does not work to catch the error.
export const removeTodoRequest = id => async dispatch => {
   try {
       const response = await fetch(`http://localhost:8080/todos/${id}`, {
           method: 'delete',
       });
       const removedTodo = await response.json();
       dispatch(removeTodo(removedTodo));
   } catch (e) {
       dispatch(displayAlert(e));
   }
}
//function that takes id/dispatch argument and updates todo with specific id to completed state in the api database displays api errors.
//uses try catch block incase fetching does not work to catch the error.
export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const  response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post',
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(updatedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    } 
}
//function to display the error alert text
export const displayAlert = text => () => {
    alert(text);
};