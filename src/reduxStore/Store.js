import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    form: formReducer
});

const store = createStore(reducers);

window.store = store;

export default store;