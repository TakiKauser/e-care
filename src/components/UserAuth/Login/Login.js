import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <h3>Log In</h3>
            <form>
                <input type="email" name="email" id="email" placeholder="Email" /> <br /> <br />
                <input type="password" name="password" id="password" placeholder="Password" /> <br /> <br />
                <input type="submit" value="Log In" />
            </form>
            <p>New to e-Care? <Link to="/signup">Create Account</Link></p>
            <div>-----------or----------</div>
            <button
                className="regular-btn"
                onClick={handleGoogleLogIn}
            >Google Sign In</button>
        </div>
    );
};

export default Login;