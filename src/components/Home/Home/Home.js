import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Doctors from '../../Doctors/Doctors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;