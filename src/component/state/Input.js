import React, { useState } from 'react';

const Input = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [text, setText] = useState('');

    function handleOnChangeName(e) {
        setName(e.target.value)
    }
    function handleOnChangeDate(e) {
        setDate(e.target.value)
    }
    function handleOnChangeGender(e) {
        setGender(e.target.value)
    }
    function handleOnChangeText(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <h2>사용자 입력</h2>
            <div>
                <input value={name} type="text" onChange={handleOnChangeName}/><br/>
                <input value={date} type="date" onChange={handleOnChangeDate}/><br/>
                <div>
                    <select value={gender} onChange={handleOnChangeGender}>
                        <option key='남' value="남자">남자</option>
                        <option key='여' value="여자">여자</option>
                    </select>
                </div>
                <textarea value={text} type="text" onChange={handleOnChangeText}/>
            </div>
            
            <div>
                <div>이름 : {name}</div>
                <div>생일 : {date}</div>
                <div>성별 : {gender}</div>
                <div>하고 싶은 말 : {text}</div>
            </div>
        </div>
    );
};

export default Input;