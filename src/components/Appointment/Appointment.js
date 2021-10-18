import React from 'react';
import { useForm } from 'react-hook-form';
import './Appointment.css';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className= "appointment-form">
            <h3>Appointment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="appointment-inputs">
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="number" placeholder="Contact Number" {...register("Contact Number", { required: true, min: 11 })} />

                <input type="submit" value="Book an Appointment"/>
            </form>
        </div>
    );
};

export default Appointment;