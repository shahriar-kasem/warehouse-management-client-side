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
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/fvsmXs5/banner1.png" />
                    <p className="legend">Travel free of emissions</p>
                </div>
                <div>
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/XyjTjpr/banner5.png" />
                    <p className="legend">Be a part of the engine that powers the world</p>
                </div>
                <div>
                    <img className='carousel-img' alt='Item pic' src="https://i.ibb.co/NWqyfRD/banner3.png" />
                    <p className="legend">Join the future of sustainable transportation</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Banner;