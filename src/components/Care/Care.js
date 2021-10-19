import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Care.css';

const Care = () => {
    const { careID } = useParams();
    const { services } = useAuth();
    // console.log(services);

    const careDetailsItem = services.filter(service => service.id == careID);
    const { name, description, image } = careDetailsItem[0];

    return (
        <div className="details-card cart">
            <h3>{name}</h3>
            <p>{description}</p>
            <hr />
            <img src={image} alt="" className="img-fluid" />
        </div >
    );
};

export default Care;