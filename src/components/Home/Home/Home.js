import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
        </div>
    );
};

export default Home;