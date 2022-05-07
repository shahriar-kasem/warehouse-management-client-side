import React from 'react';
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <div>
                
            </div>
            <div className='carousel-container'>
            <Carousel>
                <div>
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/PQqxZ9D/banner11.png" />
                    <p className="legend">BBL always gives it's customers full support</p>
                </div>
                <div>
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/Sdk2PJc/banner10.png" />
                    <p className="legend">Your satisfaction is our goal</p>
                </div>
                <div>
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/2kY8PTq/banner9.png" />
                    <p className="legend">Join the future of sustainable transportation</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;