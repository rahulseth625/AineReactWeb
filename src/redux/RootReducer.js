import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './IceCream/IceCreamReducer';

const RootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})

export default RootReducer



