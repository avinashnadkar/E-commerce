import { createStore } from 'redux'
import loginReducer from './reducers/loginReducer'


let store = createStore(loginReducer);

export default store;
