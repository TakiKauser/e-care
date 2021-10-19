import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();
    // console.log(services);
    return (
        <div className="container my-5">
            <h2 className="my-5"> <span className="text-primary fw-bold">e-Care</span> <span className="text-secondary">Services</span></h2>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;