import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=''>
            <NavLink to="/">
                <Button type="button" className="px-3 my-5" variant="primary">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Button>
            </NavLink>
            <h1 className="p-3 my-5 text-white bg-danger fw-bolder">404 Page Not Found ! ! !</h1>
        </div>
    );
};

export default NotFound;