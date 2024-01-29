import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function onIncrease() {
        setCount(count + 1)
    }

    function onDecrease() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;