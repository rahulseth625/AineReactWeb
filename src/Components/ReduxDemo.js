import { createStore } from 'redux';

const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const ReduxDemo = () => {

    const applyMiddleware = redux.applyMiddleware
    const combineReducers = redux.combineReducers

    const BUY_CAKE = 'BUY_CAKE';
    const BUY_ICECREAM = 'BUY_ICECREAM';


    function buyCake() {
        return {
            type: BUY_CAKE,
            info: 'First Redux Action'
        }
    }

    function buyIceCream() {
        return {
            type: BUY_ICECREAM,
        }
    }

    const initialCakeState = {
        numOfCakes: 10,
    }

    const initialIceCreamState = {
        numOfCakes: 10,
    }

    const cakeReducer = (state = initialCakeState, action) => {
        switch (action.type) {
            case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: return state
        }
    }

    const iceCreamReducer = (state = initialIceCreamState, action) => {
        switch (action.type) {
            case BUY_ICECREAM: return {
                ...state,
                numOfIceCream: state.numOfCakes - 1
            }
            default: return state
        }
    }

    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    })

    const store = createStore(rootReducer, applyMiddleware(logger))
    console.log('Initial State', store.getStore)
    const unsubscribe = store.subscribe(() => { })
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyIceCream())
    store.dispatch(buyIceCream())
    unsubscribe()

    return (
        <>
            {console.log('Initial State', store.getStore)}
        </>
    )

}

export default ReduxDemo

