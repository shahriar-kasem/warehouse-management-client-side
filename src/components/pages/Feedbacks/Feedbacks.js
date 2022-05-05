import React from 'react';
import { useForm } from 'react-hook-form';
import useFeedback from '../../../hooks/useFeedback';
import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useFeedback();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='my-5'>
           <div className='bg-blue-100 py-5'>
           <h1 className='my-3 font-bold text-rose-400 text-lg'>What Our Clients Say About US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-5 lg:mx-10 mx-1'>
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback._id}
                        feedback={feedback}
                    ></Feedback>)
                }
            </div>
           </div>
            <div className='my-5 mx-2'>
                <h1 className='my-2 text-red-500 font-bold text-lg'>Give your valuable feedback</h1>
                <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Your name' {...register("name", { required: true, maxLength: 100 })} />
                    <textarea className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Feedback' {...register("feedback", { required: true, maxLength: 500 })} />

                    <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Ratings Out of 5' type="number" {...register("ratings", { min: 1, max: 5 })} />
                    <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' placeholder='' type="submit" value='Give feedback' />
                </form>
            </div>
        </div>
    );
};

export default Feedbacks;