import React, { useRef } from 'react';

const UseRef = () => {

    let inputRef = useRef(null);

    const handleInputRef = () => {
        inputRef.current.focus();
        // inputRef.current.style.display = 'none';
        inputRef.current.style.color = "yellow";
        return inputRef.current.value = 100;
    }


    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={handleInputRef}>Submit</button>
        </div>
    )
}

export default UseRef;