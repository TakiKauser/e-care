import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="pt-5 pb-5 footer-cta">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+02 087423</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faEnvelopeOpen} />
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>eCare@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 footer-content">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="text-white">
                                        <h1>e-Care</h1>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <FontAwesomeIcon icon={faFacebook} className='mx-3 text-white fa-2x' />
                                        <FontAwesomeIcon icon={faTwitter} className='mx-3 text-white fa-2x' />
                                        <FontAwesomeIcon icon={faGoogle} className='mx-3 text-white fa-2x' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="https://www.facebook.com">About</a></li>
                                        <li><a href="https://www.facebook.com">Services</a></li>
                                        <li><a href="https://www.facebook.com">Doctors</a></li>
                                        <li><a href="https://www.facebook.com">Appointment</a></li>
                                        <li><a href="https://www.facebook.com">Diagnosis</a></li>
                                        <li><a href="https://www.facebook.com">Expert Team</a></li>
                                        <li><a href="https://www.facebook.com">Contact Us</a></li>
                                        <li><a href="https://www.facebook.com">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form>
                                            <input type="text" placeholder="Email Address" />
                                            <button><i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="text-center col-xl-6 col-lg-6 text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="https://codepen.io/anupkumar92/">Taki Kauser</a></p>
                                </div>
                            </div>
                            <div className="text-right col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="https://www.facebook.com">Home</a></li>
                                        <li><a href="https://www.facebook.com">Terms</a></li>
                                        <li><a href="https://www.facebook.com">Privacy</a></li>
                                        <li><a href="https://www.facebook.com">Policy</a></li>
                                        <li><a href="https://www.facebook.com">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;