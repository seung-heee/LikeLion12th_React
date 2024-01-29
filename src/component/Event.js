import React from 'react';
import '../css/styles.css'

const Event = () => {
    function handleOnClick (e) {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }
    return (
        <div className='Event'>
            <button value="Hello" onClick={handleOnClick}>Hello 버튼</button>
            <button value="Bye" onClick={handleOnClick}>Bye 버튼</button>
        </div>
    );
};

export default Event;