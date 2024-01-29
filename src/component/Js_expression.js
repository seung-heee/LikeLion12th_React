import React from 'react';

const Js_expression = () => {
    // 변수 선언
    const name = '홍길동'
    const food = '홍길동전'
    
    const seasons = ['봄', '여름', '가을', '겨울']
    
    return (
        <>
            {/* 직접 참조하여 바로 변수 사용 가능 */}
            <div>안녕하세요 저는 {name}입니다.</div>
            <div>제가 제일 좋아하는 전은 {food}입니다.</div>


            {/* Key는 어떤 항목을 변경, 추가 또는 삭제할지 식별할 때 도움.
            Key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정 */}
            {seasons.map((season, idx)=> {
                return (
                    <li key={idx}>{season}</li>
                )
            })}
        </>
    );
};

export default Js_expression;