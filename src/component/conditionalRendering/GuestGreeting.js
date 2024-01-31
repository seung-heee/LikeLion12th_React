import React, { useState } from 'react';

const GuestGreeting = () => {
    const [user, setUser] = useState();

    function handleChangeBtn(e) {
        setUser(e.target.value)
    }
    
    return (
    <>
        <div>처음 방문하셨군요</div>
        <div>반갑습니다.</div>

        <br/>
        <div>
            <p>계정이 있으신가요?</p>
            <button value='Yes' onClick={handleChangeBtn}>Yes</button>
            <button value='No' onClick={handleChangeBtn}>No</button>
        </div>

        {user == 'Yes' ? '로그인 하러가기' : '회원가입 하러가기' }
    </>
    );
};

export default GuestGreeting;
