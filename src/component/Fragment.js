import React from 'react';
// 최상위 태그 규칙
const Fragment = () => {
    // JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다.
    // Fragment, 빈 태그도 사용 가능 <></>
    // 최상위 태그가 존재하지 않으면 오류 발생
    return (
        <>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
            <div>안녕하세요</div>
        </>
    );
};

export default Fragment;