import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useServices();
    const navigate = useNavigate();

    const getServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='my-5'>
            <h1 className='my-3 font-bold text-3xl text-green-500'><i>Our Services</i></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:mx-5 lg:mx-10 mx-1'>
                {
                    services.map(service => <Service
                    key={service._id}
                    getServiceDetail={getServiceDetail}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;