import React, { useState } from 'react';

const HigherOrderComponent = () => {

    return (
        <div>
            <HOCPink cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCYellow cmp={Counter} />
        </div>
    )
}

const HOCPink = (props) => {
    return <div>
        <h2 style={{ backgroundColor: 'pink', width: 100 }}>
        <props.cmp /> </h2>
    </div>

}

const HOCGreen = (props) => {
    return <div>
        <h2 style={{ backgroundColor: 'green', width: 100 }}>
            <props.cmp /> </h2>
    </div>
}

const HOCYellow = (props) => {
    return <div>
        <h2 style={{ backgroundColor: 'yellow', width: 100 }}>
        <props.cmp /> </h2>
    </div>
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Higher Order component Update</button>
                count : {count}
        </div>
    )
}


export default HigherOrderComponent;