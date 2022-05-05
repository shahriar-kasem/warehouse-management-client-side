import React from 'react';
import google from '../../../images/logo/google.png';


const SocialLogin = () => {

    return (
        <div className='flex justify-center'>
             <div className='flex justify-center items-center my-5 bg-blue-500 hover:bg-blue-700 rounded w-2/2 md:w-1/2 lg:w-1/2 mx-auto lg:mx-24 md:mx-10'>
                 <img className='h-10 rounded' src={google} alt="" />
                    <button className=' px-5 py-1 mt-1 font-bold text-white mb-2'>Continue with Google</button>
                </div>
        </div>
    );
};

export default SocialLogin;