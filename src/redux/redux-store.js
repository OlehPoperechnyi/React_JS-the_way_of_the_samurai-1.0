import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import addItemReducer from "./addItem-reducer";
import requestsPageReducer from "./requestsPage-reducer";
import categoriesReducer from "./categories-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";



let reducers = combineReducers({
    items: addItemReducer,
    dialogs: requestsPageReducer,
    categories: categoriesReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;