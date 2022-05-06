import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBlogs from '../../../hooks/useBlogs';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blog = () => {
    const [user] = useAuthState(auth);
    const [blogs, setBlogs] = useBlogs([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const question = data.question;
        const answer = data.answer;
        const email = user.email;
        const newBlog = { question, answer, email }

        fetch('https://powerful-journey-42037.herokuapp.com/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBlog),
        })
            .then(res => res.json())
            .then(data => {
                const allBlog = [...blogs, data];
                setBlogs(allBlog);
                toast("Blog added successfully!")
                e.target.reset();
            })
    };

    return (
        <div className='my-5'>
            <h1 className='my-2 text-blue-500 font-bold text-2xl'><i>Read our blogs</i></h1>
            <div>
                <div>
                    {
                        blogs.length === 0 &&
                        <div><h1 className='my-3 text-red-700 text-xl'>Add some item to see here!!</h1></div>
                    }
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mx-5 my-5'>
                        {
                            blogs.map(blog => <BlogDetail
                                key={blog._id}
                                blog={blog}
                            ></BlogDetail>)
                        }
                    </div>
                </div>
                <div>
                    {
                        !user ? <div className='my-5'><h1 className='font-semibold text-xl md:text-2xl'>Wanna write blog? <Link to='/login'><span className='text-blue-500'>Please login</span></Link></h1></div>
                            :
                            <div className='my-5 mx-2'>
                                <h1 className='my-2 text-red-500 font-bold text-lg'>Write blog</h1>
                                <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                                    <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Question' {...register("question", { required: true, maxLength: 100 })} />
                                    <textarea className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Answer' {...register("answer", { required: true, maxLength: 500 })} />

                                    <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' placeholder='' type="submit" value='Submit' />
                                </form>
                            </div>
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Blog;