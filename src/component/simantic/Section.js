import React from 'react';

const Section = (props) => {
    console.log(props)
    
    return (
        <>
            <div>안녕하세요 저는 {props.name}입니다.</div>
            <div>제가 제일 좋아하는 전은 {props.food}입니다.</div>
        </>
    );
};

export default Section;