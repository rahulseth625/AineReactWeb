import React, { useContext, useState, useMemo } from 'react';

const UseMemo = () => {

    const[counter, setCounter] = useState(0);
    const[items, setItems] = useState(10);

    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multicount");
        return counter*5;
    },[counter])

    return <>

        <h2>{multiCountMemo}</h2>
        <button onClick = {() => setCounter(counter+1)}>  
            <h2>Count : {counter}</h2>
        </button>
        <button onClick = {() => setItems(items*10)}>
            <h2>Items : {items}</h2>
        </button>
    </>
    
}

export default UseMemo