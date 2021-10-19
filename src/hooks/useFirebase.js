import { useState } from "react";
import { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInUsingEmailPassword = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [auth])

    // fetch json data
    useEffect(() => {
        fetch("./services.json")
            .then(response => response.json())
            .then(jsonData => setServices(jsonData))
    }, []);

    useEffect(() => {
        fetch("./doctorsData.json")
            .then(response => response.json())
            .then(jsonData => setDoctors(jsonData))
    }, []);

    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut,
        setEmail,
        setPassword,
        signInUsingEmailPassword,
        services,
        setServices,
        doctors
    }
}

export default useFirebase;