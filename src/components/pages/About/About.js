import React from 'react';
import mypic from '../../../images/myPic/mypic.jpg';

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center my-5 w-2/2 lg:w-1/2 mx-auto'>
            <div>
                <h1 className='font-bold text-green-500 text-3xl my-2'><i>Our website details</i></h1>
                <p className='font-semibold text-lime-600'>In this website you can add item on warehouse and upon deliver you can reduce item quantity easily. If you want you can also add item quantity. You can add new items from 'Add new item' page. You can manage inventory items from 'Manage inventory' page. You can also see your added items list on 'My items' page. You can give and see our customer feedbacks on 'Customer feedback' page. You can also read and write blogs from 'Blog' page.</p>
            </div>
            <div className='mt-5'>
                <img src={mypic} alt="" />
                <h1 className='font-bold text-3xl my-2'><i>Website owner: <span className='text-blue-500 '> Shahriar Kasem</span></i></h1>
            </div>
        </div>
    );
};

export default About;