import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [service, setService] = useState();
    const {id} = useParams();
    console.log(service)
    useEffect(() => {
        const url = `https://powerful-journey-42037.herokuapp.com/service/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [id, service])
    return (
        <div className='flex flex-col justify-center items-center lg:w-1/2 mx-auto mt-6'>
            <h1 className='font-extrabold mb-4 text-3xl text-blue-500'>{service?.name}</h1>
            <img className='rounded' src={service?.img} alt="" />
            <p><span className='text-blue-500 font-semibold text-lg'>Details:</span> {service?.description}</p>
        </div>
    );
};

export default ServiceDetail;