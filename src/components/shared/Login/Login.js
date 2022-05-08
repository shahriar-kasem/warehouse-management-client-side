import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import Loading from '../Loading/Loading';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const { register, handleSubmit } = useForm();
    const onSubmitLogin = async(data) => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email,password)
        const token = await axios.post('https://powerful-journey-42037.herokuapp.com/login', {email});
        const tokenData = token.data;
        localStorage.setItem('accessToken', tokenData.accessToken);
        navigate(from, { replace: true });
    };

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(loading){
          return <Loading></Loading>
      }
      if(user){
        
      }

    return (
        <div className='my-5 mx-2'>
            <h1 className='my-2 text-red-500 font-bold text-lg'>Please Login</h1>
            <div>
                <div>
                    {
                        error && 
                        <p className='text-2xl my-2 text-red-600 font-semibold'>{error.message}</p>
                    }
                </div>
                <div>
                    <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmitLogin)}>
                        <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Your email' type='email' {...register("email", { required: true, maxLength: 200 })} />
                        <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Password' {...register("password", { required: true, maxLength: 100 })} />
                        <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' placeholder='' type="submit" value='Login' />
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
                    <h6 className='font-semibold'>Don't have an account? <Link to='/signup'><span className='text-blue-600'>Sign Up</span></Link></h6>
                </div>
                <div>
                    <h6 className='font-semibold'>Forget password? <Link to='/resetpassword'><span className='text-blue-600'>Reset password</span></Link></h6>
                </div>
            </div>
        </div>
    );
};

export default Login;