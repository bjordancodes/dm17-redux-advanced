import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './ducks/cartReducer';
import userReducer from './ducks/userReducer';
import promiseMiddleware from 'redux-promise-middleware';


const combinedReducers = combineReducers({
    cart: cartReducer, 
    user: userReducer
});

const middlewares = applyMiddleware(promiseMiddleware());


const store = createStore(combinedReducers, middlewares);

export default store;