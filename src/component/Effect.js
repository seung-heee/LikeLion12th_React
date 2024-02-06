import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);
    const handleSetCount = (value) => {
        setCount(count + value);
    }

    useEffect(()=>{
        console.log('컴포넌트 마운트')
    }, []);

    return (
        <div>
            안녕하세요.
            <h1>{count}</h1>
            <button onClick={()=>{handleSetCount(-10)}}>-10</button>
            <button onClick={()=>{handleSetCount(10)}}>+10</button>
        </div>
    );
};

export default Effect;
