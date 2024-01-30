import React, { useState } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLoggedIn, name, studentId }) => {

    if(isLoggedIn) {
        return <UserGreeting name={name} studentId={studentId} />
    }
    else {
        return <GuestGreeting />
    }
};

export default Greeting;