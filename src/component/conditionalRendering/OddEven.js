import React from 'react';

const OddEven = () => {
    const num = 2024;

    return (
        <div>
            {num}은(는) {num % 2 === 0 ? '짝수' : '홀수'}입니다.        
        </div>
    );
};

export default OddEven;