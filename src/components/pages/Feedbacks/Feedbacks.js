import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFeedback from '../../../hooks/useFeedback';
import Loading from '../../shared/Loading/Loading';
import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useFeedback();
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.feedback;
        const ratings = data.ratings;
        const email = user.email;
        const newFeedback = { name, description, ratings, email };
        const url = `https://powerful-journey-42037.herokuapp.com/feedback`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
            .then(res => res.json())
            .then(data => {
                const moreFeedback = [...feedbacks, newFeedback];
                setFeedbacks(moreFeedback);
                alert('Thanks for your valuable feedback.')
                e.target.reset();
            })
    };

    return (
        <div className='my-5'>
            <div className='bg-blue-100 py-5'>
                <h1 className='my-3 font-bold text-green-500 text-3xl'><i>What Our Clients Say About Us</i></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-5 lg:mx-10 mx-1'>
                    {
                        !feedbacks ?
                            <Loading></Loading>
                            :
                            feedbacks.map(feedback => <Feedback
                                key={feedback._id}
                                feedback={feedback}
                            ></Feedback>)
                    }
                </div>
            </div>
            <div>
                {
                    !user ? <div className='my-5'><h1 className='font-semibold text-xl md:text-2xl'>Wanna give feedback? <Link to='/login'><span className='text-blue-500'>Please login</span></Link></h1></div>
                        :
                        <div className='my-5 mx-2'>
                            <h1 className='my-2 text-red-500 font-bold text-lg'>Give your valuable feedback</h1>
                            <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Your name' {...register("name", { required: true, maxLength: 100 })} />
                                <textarea className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Feedback' {...register("feedback", { required: true, maxLength: 500 })} />

                                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Ratings Out of 5' type="number" required {...register("ratings", { min: 1, max: 5 })} />
                                <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' placeholder='' type="submit" value='Give feedback' />
                            </form>
                        </div>
                }
            </div>
        </div>
    );
};

export default Feedbacks;