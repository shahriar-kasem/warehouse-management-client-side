import React from 'react';

const Service = ({service, getServiceDetail}) => {
    const {_id, name, img, description} = service;
    // console.log(service)
    const shortDescription = description.slice(0, 200);
    return (
        <div className='border-2 border-blue-200 rounded px-2 lg:px-5'>
            <h1 className='font-semibold text-blue-400 text-lg'>{name}</h1>
            <p><span className='font-semibold text-blue-800'>Details</span>: {shortDescription}</p>
          <div className='my-1 rounded lg:mx-24 md:mx-10 mx-5'>
          <button className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2 mx-5' onClick={() => getServiceDetail(_id)}>See Details</button>
          </div>
        </div>
    );
};

export default Service;