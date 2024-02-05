import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <Link to="/project">프로젝트 페이지로 이동!</Link>
        </div>
    );
};

export default Home;
