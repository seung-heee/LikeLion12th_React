import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [users, setUsers] = useState(null);
    
    const FetchUsers = async()=> {
        try {
            setUsers(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('에러:', error);
        }
    }

    
    const AxiosUsers = async () => {
        try {
            setUsers(null);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data); // 데이터는 response.data에 들어있음.
            } catch (e) {
            console.log('에러')
            }
      };



    useEffect(() => {
        AxiosUsers();
        // FetchUsers();
        
    }, []);
  
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} / {user.email}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;
