import React, { useState } from 'react';

const GuestGreeting = () => {
    const [user, setUser] = useState();

    function handleChangeBtn(e) {
        setUser(e.target.value)
    }
    
    return (
    <>
        <div>처음 방문하셨군요</div>
    </>
    );
};

export default GuestGreeting;
