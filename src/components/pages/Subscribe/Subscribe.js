import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const email = data.email;
        const newSubscriber = { email };

        const url = `https://powerful-journey-42037.herokuapp.com/subscribe`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSubscriber)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                toast('Thanks for subscribing')
            })
    };
    return (
        <div className='my-5 bg-teal-300 hover:bg-teal-400 flex flex-col py-3'>
            <h1 className='text-white font-bold my-2 text-xl'>Subscribe for regular updates!</h1>
            <div>
                <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-2 rounded pl-2 py-1' placeholder='Enter your email' {...register("email", { required: true, maxLength: 20 })} />
                    <input className='text-white font-bold my-2 bg-rose-400 hover:bg-rose-500 rounded py-2' type="submit" value='Subscribe' />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Subscribe;