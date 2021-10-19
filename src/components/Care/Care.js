import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './Care.css';

const Care = () => {
    const { careID } = useParams();
    const { services } = useServices();
    const [item, setItem] = useState({});

    useEffect(() => {
        const careDetailsItem = services.find(service => service.id == careID);
        setItem(careDetailsItem);
    }, [careID, services])

    return (
        <div className="details-card cart">
            <h3>{item?.name}</h3>
            <p>{item?.description}</p>
            <hr />
            <img src={item?.image} alt="" className="img-fluid" />
        </div >
    );
};

export default Care;