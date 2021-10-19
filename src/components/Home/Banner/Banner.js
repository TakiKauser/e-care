import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/seniors-talking-each-other_107420-36448.jpg"
                        alt="First slide"
                        height="400"
                    />
                    <Carousel.Caption>
                        <h3>Elder Care</h3>
                        <p>We care for senior citizens.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/closeup-support-hands_53876-14962.jpg"
                        alt="Second slide"
                        height="400"
                    />

                    <Carousel.Caption>
                        <h3>Health & Nutrition</h3>
                        <p>Healthy life required prope nutriton.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/granddaughter-talking-with-her-grandmother-sitting-wheelchair-cheerful-concept-happy-family_1150-4339.jpg"
                        alt="Third slide"
                        height="400"
                    />

                    <Carousel.Caption>
                        <h3>Enjoy your moments.</h3>
                        <p>Keep you mind fresh and jolly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;