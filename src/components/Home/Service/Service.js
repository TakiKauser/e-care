import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    // console.log(props);
    const { id, image, name, description } = props.service;
    return (
        <div>
            <Col>
                <Card className="cart">
                    <Card.Img className="card-image cart-image" variant="top" src={image} height="250" />
                    <Card.Body>
                        <Card.Title><FontAwesomeIcon icon={faHandPointRight} /> {name}</Card.Title>
                        <Card.Text className="">
                            <p className="p-2 m-2"><FontAwesomeIcon icon={faBookOpen} /> {description?.slice(0, 130)}</p>
                        </Card.Text>
                    </Card.Body>
                    <NavLink to={`/service/care/${id}`}>
                        <button className="p-2 d-block w-100 btn-secondary">Details</button>
                    </NavLink>
                </Card>
            </Col>
        </div>
    );
};

export default Service;