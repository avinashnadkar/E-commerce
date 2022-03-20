import { createStore,applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import signupReducer from './reducers/signupReducer';
import userInfoReducer from './reducers/userInfoReducer';
import thunk from 'redux-thunk';

const redux = require('redux');

const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
    loginReducer,
    productReducer,
    cartReducer,
    signupReducer,
    userInfoReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
