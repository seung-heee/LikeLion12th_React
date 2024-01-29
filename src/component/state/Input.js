import React, { useState } from 'react';

const Input = () => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [text, setText] = useState('');

    const [state, setState] = useState({
        name: '',
        birth: '',
        gender: '',
        text: '',
    });

    function handleOnChange(e) {
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <div>
            <h2>사용자 입력</h2>
            <div>
                <input name='name' value={state.name} type="text" onChange={handleOnChange}/><br/>
                <input name='birth' value={state.birth} type="date" onChange={handleOnChange}/><br/>
                <div>
                    <select name='gender' value={state.gender} onChange={handleOnChange}>
                        <option key='남' value="남자">남자</option>
                        <option key='여' value="여자">여자</option>
                    </select>
                </div>
                <textarea name='text' value={text} type="text" onChange={handleOnChange}/>
            </div>
            
            <div>
                <div>이름 : {state.name}</div>
                <div>생일 : {state.birth}</div>
                <div>성별 : {state.gender}</div>
                <div>하고 싶은 말 : {state.text}</div>
            </div>
        </div>
    );
};

export default Input;