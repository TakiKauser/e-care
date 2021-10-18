import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-not-found'>
            <NavLink to="/">
                <Button type="submit" className="px-3 m-5" variant="danger">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </Button>
            </NavLink>
            {/* back-up text as bg-img can rarely found in netlify! */}
            <h1 className="p-3 text-white bg-danger fw-bolder">404 Page Not Found ! ! !</h1>
        </div>
    );
};

export default NotFound;