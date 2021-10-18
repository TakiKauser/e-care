import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='p-2 d-flex row'>
            <div className='col-sm-12 col-md-6'>IMPORTANT NOTICE: COVID-19 Visitor Policy Update</div>
            {/* <div className="row"> */}
            <div className="col-md-2 d-flex">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} />
                <div className="ms-2">
                    <span>57/E, Dhanmondi, Dhaka.</span>
                </div>
            </div>
            <div className="col-md-2 d-flex">
                <FontAwesomeIcon className="" icon={faPhone} />
                <div className="ms-2">
                    <span>+02 087423</span>
                </div>
            </div>
            <div className="col-md-2 d-flex">
                <FontAwesomeIcon className="" icon={faClock} />
                <div className="ms-2">
                    <span>Mon - Fri: 08:00 - 21:00</span>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Info;