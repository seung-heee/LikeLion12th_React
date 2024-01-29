import React from 'react';
import '../css/styles.css'

const Event = () => {
    function handleOnClick () {
        alert('반갑습니다')
    }
    return (
        <div className='Event'>
            <button onClick={handleOnClick}>버튼을 클릭하세요!</button>
        </div>
    );
};

export default Event;