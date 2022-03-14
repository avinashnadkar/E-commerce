import { createStore } from 'redux'
import loginReducer from './reducers/loginReducer'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const redux = require('redux');

const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
    loginReducer,
    productReducer,
    cartReducer
});

let store = createStore(rootReducer);


export default store;
