import React from 'react';

const CollegeList = () => {
    const arr = [1, 2, 3, 4, 5];
    const mapArr = arr.map((num) => {return num * num});

    console.log(arr); // > Array [1, 2, 3, 4, 5]
    console.log(mapArr); // > Array [1, 4, 9, 16, 25]

    const users = [
        {
            id: 1,
            username: '짱구',
            email: 'jjanggo@gmail.com',
        },
        {
            id: 2,
            username: '철수',
            email: 'chsso@example.com',
        },
        {
            id: 3,
            username: '유리',
            email: 'yuri@example.com',
        },
        {
            id: 4,
            username: '맹구',
            email: 'manggo@example.com',
        },
        {
            id: 5,
            username: '훈이',
            email: 'hoon@example.com',
        }
      ];

      const newUsers = users.map((user, index)=> {
        return <p key={index}>{user.username} / {user.email}</p>
      })
      
      return (
        <div>
            {users.map((user, index)=> {
                return <p key={index}>{user.username} / {user.email}</p>
            })}
        </div>
      ) 
};

export default CollegeList; 