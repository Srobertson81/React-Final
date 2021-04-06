import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE } from './actions';

//sets the initial data state
const initialState = { isLoading: false, data: [] };
//Redux reducer specifies what will happen within the Redux store.js with each Redux action imported from actions
//taken from the users and decides what state/action to implement takes state and triggered action argument.
//returns updated state and sets current state to updated state.
export const todos = (state = initialState, action) => {
    const { type, payload } = action;
// switch to handle logic for cases of creation, removal, completion of todos and api communication to update the state
    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        return {
            ...state,
            data: state.data.concat(todo),
        };
    }
    case REMOVE_TODO: {
        const { todo: todoToRemove } = payload;
        return {
            ...state,
            data: state.data.filter(todo => todo.id !== todoToRemove.id),
        };
    }
    case MARK_TODO_AS_COMPLETED: {
        const { todo: updatedTodo } = payload;
        return {
            ...state,
            data: state.data.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            }),
        };
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return {
            ...state,
            isLoading: false,
            data: todos,
        };
    }
    case LOAD_TODOS_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_TODOS_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    }   
}