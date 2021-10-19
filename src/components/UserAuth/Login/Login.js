import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import initAuth from '../../../Firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

initAuth();

const Login = () => {

    const { isLogin, setIsLogin, setEmail, setPassword, setName, handleRegistration, error } = useAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // ----------------------------------------------------
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
            <div>
                <hr />
                <div className='mx-auto mt-3 w-50'>
                    <Form onSubmit={handleRegistration}>
                        <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                        {!isLogin && <div className="mb-3 row">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                        </div>}
                        <div className="mb-3 row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 row text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </Form>

                    <h2>or</h2>
                    <Button onClick={handleGoogleLogIn}>Google Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;