import React from 'react';

const Feedback = ({ feedback }) => {
    const { name, description, ratings } = feedback;
    // console.log(feedback);
    return (
        <div className='border-2 border-blue-300 rounded px-2 mx-2'>
            <div>
                <h1 className='font-extrabold text-blue-600'>Customer name: {name}</h1>
                <h4><span className='font-bold'><span className='text-orange-500'>{name}</span> says:</span> {description}</h4>
                <h6><span className='text-red-800 font-semibold'>Ratings:</span> <span className='font-bold'>{ratings}</span> Out of 5!</h6>
            </div>
        </div>
    );
};

export default Feedback;