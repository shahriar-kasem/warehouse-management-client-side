import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
       if(password !== confirmPassword){
        alert('Your password did not match! Please check your password and try again.')
       }
       else{
        createUserWithEmailAndPassword(email, password)
        console.log(password, email)
       }
    };

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate(from, { replace: true });
      }

    return (
        <div className='my-5 mx-2'>
            <h1 className='my-2 text-red-500 font-bold text-lg'>Please Register</h1>
            <div>
                <div>
                    {
                        error &&
                        <p className='text-2xl my-2 text-red-600 font-semibold'>{error.message}</p>
                    }
                </div>
                <div>
                    <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Your email' {...register("email", { required: true, maxLength: 200 })} />
                        <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Password' {...register("password", { required: true, maxLength: 100 })} />
                        <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Confirm password' {...register("confirmPassword", { required: true, maxLength: 100 })} />
                        <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' placeholder='' type="submit" value='Register' />
                    </form>
                </div>
                <div className='w-2/2 md:w-1/2 lg:w-1/2 mx-auto flex justify-center items-center'>
                    <div className='h-1 bg-red-300 w-1/2 rounded-full'></div>
                    <div className='mx-2 mb-1 font-bold text-red-400'>or</div>
                    <div className='h-1 bg-red-300 w-1/2 rounded-full'></div>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
                <div>
                    <h6 className='font-semibold'>Already registered? <Link to='/Login'><span className='text-blue-600'>Login</span></Link></h6>
                </div>
            </div>
        </div>
    );
};

export default SignUp;