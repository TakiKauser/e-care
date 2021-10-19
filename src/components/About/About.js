import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className="container about-container">
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <h3>About</h3>
                    <h1 className="fw-bolder">e-Care</h1>
                </div>
                <div className="col-sm-12 col-md-6 content">
                    <img className="img-fluid" src="https://image.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 content">
                    <p>e-Care is an organization or platform for Elder Cares. Experts are providing treatments of different kinds of diseases or complexity. Contact us & get best support with the supervision of proffessionals.</p>
                    <p>e-Care is a household name in the nursing service industry in Bangladesh. We provide compassionate nursing services and various types of home care in BD. We have a great team of physiotherapists, nurses, and other professionals.</p>
                    <Button type="button" className="my-3 " variant="dark">
                        Contact Us
                    </Button>
                </div>
            </div>
            <div className="my-4 deatailed-info">
                <h2>e-Care Services For Elderly</h2>
                <p>In-Elderly Care Service At Home is a much-needed service for patients who need assistance in day to day essential chores. Patient home care BD is one of the best elderly Care Service At Home providers in Dhaka.</p>

                <p>We strive to deliver efficient home care services for the welfare of the patients in Bangladesh. We provide an Elderly Care Service At Home In Dhaka BD. Our nurses are very skilled. They have been trained before hiring. They always try to provide their best.</p>

                <p>Our nurses are 24/7 ready for a given service of clients. Our service 24/7 Opened. Our goal is to achieve customer satisfaction with maximum service. For that, the Patient home care BD company is the most popular in Bangladesh.</p>

                <p>It is hard to accept but seniors need help in managing the daily tasks after a point of time. senior homes might be the option that pops up on your mind when you can no longer take care of them. But what if you get care services for seniors right at home? Patient home care bd was founded to provide elderly care at home in Bangladesh.</p>

                <p>The working members of a family do not have enough time to look after the aged people no matter how much they care for them. At the same time, the caretakers might not be professional enough to take care of the health of the seniors.</p>

                <p>Age matters but the physical conditions matter more. Patient home care BD has been serving craft care plans that meet individual needs. We deliver fully regulated senior care at home in Dhaka city.</p>
            </div>
        </div >
    );
};

export default About;