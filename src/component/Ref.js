import React, { useRef, useState } from 'react';

const Ref = () => {
    const [text, setText] = useState('');
    const textRef = useRef();

    function handleOnChange(e) {
        setText(e.target.value);
    }
    
    function handleOnClick() {
        if (text.length < 5) {
            textRef.current.focus();
        } else {
            alert(text);
            // textRef.current.value = "";
            setText("");
        }
    }
    
    return (
        <div>
            <input ref={textRef} type="text" value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
};

export default Ref;



