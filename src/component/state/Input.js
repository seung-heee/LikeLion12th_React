import React, { useState } from 'react';

const Input = () => {
    const [name, setName] = useState('');
    
    return (
        <div>
            <h2>사용자 입력</h2>
            <input value={name} type="text" onChange={handleOnChangeName}/><br/>
            <input value={date} type="date" onChange={handleOnChangeDate}/><br/>
            <div>
                <select value={gender} onChange={handleOnChangeGender}>
                    <option key='남' value="남자">남자</option>
                    <option key='여' value="여자">여자</option>
                </select>
            </div>
            <textarea value={text} type="text" onChange={handleOnChangeText}/>

            <div>이름 : {name}</div>
            <div>생일 : {date}</div>
            <div>성별 : {gender}</div>
            <div>하고 싶은 말 : {text}</div>
        </div>
    );
};

export default Input;