import React, { useState } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ yes, setYes }) => {
    function handleChangeBtn(e) {
        setYes(e.target.value);
    }

    return (
        <div>
            <button value='Yes' onClick={handleChangeBtn}>Yes</button>
            <button value='No' onClick={handleChangeBtn}>No</button>
        </div>
    )
}
export default Greeting