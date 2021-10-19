import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const { doctors } = useDoctors();
    return (
        <div className="container my-5">
            <h2 className="my-5"> <span className="text-primary fw-bold">e-Care</span> <span className="text-secondary">Doctors</span></h2>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;