import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';


const Doctor = (props) => {
    const { image, name, specialized, email } = props.doctor;
    return (
        <div>
            <Col>
                <Card className="cart">
                    <Card.Img className="card-image cart-image" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="">
                            <p className="p-2 m-2"> {specialized}</p>
                            <p className="p-2 m-2"><FontAwesomeIcon icon={faEnvelopeOpen} /> {email}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;