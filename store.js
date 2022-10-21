import { createStore } from 'redux';
//import logger from 'redux-logger';
//import thunk from 'redux-thunk';
//import carReducer from './combinedReducer/carReducer';
//import mobileReducer from './combinedReducer/mobileReducer';
//import cakeReducer from "./Cake/cakeReducer";
import userReducer from './Async/reducer';


const store = createStore(userReducer)

export default store;
