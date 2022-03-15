import { createStore } from 'redux'
import loginReducer from './reducers/loginReducer'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import signupReducer from './reducers/signupReducer';

const redux = require('redux');

const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
    loginReducer,
    productReducer,
    cartReducer,
    signupReducer
});

let store = createStore(rootReducer);


export default store;
