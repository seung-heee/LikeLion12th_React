import React from 'react';

const UserGreeting = ({name, studentId}) => {
    return (
    <>
        <div>또 오셨군요</div>
        <div>반갑습니다. {name}님</div>

        {studentId == '24' ? '신입생이시군요' : '재학생이시군요'}
    </>
    );
};

export default UserGreeting;