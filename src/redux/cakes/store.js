import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from '../RootReducer';
import logger from 'redux-logger';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store