import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === 'increment'){
        return state + 1;
    }
    if(action.type === 'decrement'){
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: 'increment' })}> Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}> Decrement</button>
        </div>
    )
}

export default UseReducer;