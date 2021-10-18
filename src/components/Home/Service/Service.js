import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    // console.log(props);
    const { id, image, name, description } = props.service;
    const serviceDetails = () => {
        console.log(id);
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="card-image" variant="top" src={image} height="250" />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faHandPointRight} /> {name}</Card.Title>
                        <Card.Text className="">
                            <p className="p-2 m-2"><FontAwesomeIcon icon={faBookOpen} /> {description.slice(0, 130)}</p>
                            <p className="p-2 m-2"><FontAwesomeIcon icon={faDollarSign} />197</p>
                        </Card.Text>
                    </Card.Body>
                    <NavLink to={`/service/care/${id}`}>
                        <button onClick={() => serviceDetails({ id })} className="p-2 btn-secondary">Details</button>
                    </NavLink>
                </Card>
            </Col>
        </div>
    );
};

export default Service;