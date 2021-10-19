import { useEffect, useState } from "react";

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("/doctorsData.json")
            .then(response => response.json())
            .then(jsonData => setDoctors(jsonData))
    }, []);
    return {
        doctors
    }
};

export default useDoctors;