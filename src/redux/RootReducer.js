import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './IceCream/IceCreamReducer';
import UserReducer from './User/UserReducer';

const RootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    //user: UserReducer
})

export default RootReducer



