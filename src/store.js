import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartReducer from './ducks/cartReducer';
import userReducer from './ducks/userReducer';
import promiseMiddleware from 'redux-promise-middleware';


const combinedReducers = combineReducers({
    cart: cartReducer, 
    user: userReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));


const store = createStore(combinedReducers, middlewares);

export default store;