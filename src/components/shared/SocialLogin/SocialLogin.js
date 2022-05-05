import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/logo/google.png';
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if(loading){
        return <Loading></Loading>;
    }
    if(user){
        navigate(from, { replace: true });
      }

    return (
        <section>
            <div>
                <div>
                    {
                        error &&
                        <p className='text-2xl my-2 text-red-600 font-semibold'>{error.message}</p>
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <div onClick={handleGoogleSignIn} className='flex justify-center items-center my-5 bg-blue-500 hover:bg-blue-700 rounded w-2/2 md:w-1/2 lg:w-1/2 mx-auto lg:mx-24 md:mx-10'>
                    <img className='h-10 rounded' src={google} alt="" />
                    <button className=' px-5 py-1 mt-1 font-bold text-white mb-2'>Continue with Google</button>
                </div>
            </div>
        </section>
    );
};

export default SocialLogin;