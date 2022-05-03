import React from 'react';
import errorImg from '../../../images/error/error404.png';

const NotFound = () => {
    return (
        <div>
            <div className='mt-20'>
                <h1 className='text-red-600 font-extrabold py-2 text-4xl'>Not Found! 404</h1>
                <p className='text-red-500 font-semibold text-lg'>The page you are looking for is not available</p>
                <div className='flex justify-center'>
                    <img src={errorImg} alt="error 404!" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;