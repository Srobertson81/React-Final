import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './Components/reducers';
//reducer const for todos
const reducers = {
    todos,
};
//function to store states tells redux persist how to handle the inital and stored states of application
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
//puts reducers into form to pass to createStore function
const rootReducer = combineReducers(reducers);
//Redux persist keeps the state of the todos with a refreshing of browser
const persistedReducer = persistReducer(persistConfig, rootReducer);
//applys thunks
export const configureStore = () => 
    createStore(
        persistedReducer,
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );