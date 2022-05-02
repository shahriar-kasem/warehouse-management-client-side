import React from 'react';
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <div className='carousel-container'>
            <Carousel>
                <div>
                    <img className='carousel-img' src="https://i.ibb.co/BC4HQMY/psychotherapy-3270478-1920.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://i.ibb.co/BC4HQMY/psychotherapy-3270478-1920.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://i.ibb.co/BC4HQMY/psychotherapy-3270478-1920.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;