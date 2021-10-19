import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
        <div className="">
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
                    <button type="submit" className="px-2">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </Form>
                <hr />
                <button><FontAwesomeIcon onClick={handleGoogleLogIn} icon={faGoogle} className='mx-3' /></button>
                <hr />
            </div>
        </div>
    );
};

export default Login;