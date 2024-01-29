import React from 'react';

const Section = ({name, food}) => {

    return (
        <>
            <div>안녕하세요 저는 {name}입니다.</div>
            <div>제가 제일 좋아하는 전은 {food}입니다.</div>
        </>
    );
};

export default Section;