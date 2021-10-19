import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
    const { setEmail, setPassword, signInUsingEmailPassword, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    const handleRegistration = e => {
        e.preventDefault();
        signInUsingEmailPassword()
            .then((userCredential) => {
                console.log(userCredential);
                setUser(userCredential);
                history.push(redirect_uri);
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <div>

            </div>
            <div>
                <h3>Create Account</h3>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="email" id="email" placeholder="Email" /> <br /> <br />
                    <input onBlur={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" /> <br /> <br />
                    {/* <input type="password" name="confirm-password" id="confirm-password" placeholder="Re-Enter Password" /> <br /> <br /> */}
                    <input type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;