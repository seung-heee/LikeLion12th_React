import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [users, setUsers] = useState(null);
    const [posts, setPosts] = useState(null);

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

    const FetchPosts = async()=> {
        try {
            setPosts(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                title: '새로운 포스트',
                body: '포스트 내용',
                userId: 1,
                }),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('새로운 포스트가 생성되었습니다:', data);
            setPosts(data);
        } catch (error) {
            console.error('에러:', error);
        }
    }

    const AxoisPosts = async()=> {
        try {
            setPosts(null);
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: '새로운 포스트',
                body: '포스트 내용',
                userId: 1,
            });

            console.log('axios : 새로운 포스트가 생성되었습니다:', response.data);
            setPosts(response.data);
        } catch (error) {
            console.error('에러:', error);
        }
    }

    useEffect(() => {
        AxiosUsers();
        // FetchUsers();
    }, []);
  
    if (!users) return null;
    if (!posts) return null;

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
