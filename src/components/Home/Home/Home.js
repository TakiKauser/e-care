import React from 'react';
import About from '../../About/About';
import Appointment from '../../Appointment/Appointment';
import Contact from '../../Contact/Contact';
import Doctors from '../../Doctors/Doctors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Doctors></Doctors>
            <Appointment></Appointment>
            <About></About>
        </div>
    );
};

export default Home;