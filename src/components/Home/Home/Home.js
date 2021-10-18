import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;