import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.description;
        const url = data.url;
        const supplier = data.supplier;
        const price = data.price;
        const quantity = data.quantity;
        const email = user.email;
        const newUser = { name, description, url, supplier, price, quantity, email };

        fetch('https://powerful-journey-42037.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            toast("Item added successfully!")
            e.target.reset();
        })
    };
    return (
        <div className='my-5 mx-2'>
            <h1 className='my-2 text-red-500 font-bold text-2xl'>Add a new item</h1>
            <form className='flex flex-col w-2/2 md:w-1/2 lg:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 100 })} />
                {/* <input value={user.email} className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Your email' {...register("email", { required: true, maxLength: 200 })} /> */}
                <textarea className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Product description' {...register("description", { required: true, maxLength: 500 })} />
                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Product img URL' {...register("url", { required: true, maxLength: 200 })} />
                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Supplier name' {...register("supplier", { required: true, maxLength: 100 })} />
                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Product price' type="number" required {...register("price", { min: 1 })} />
                <input className='mb-2 border-2 border-blue-300 py-2 px-2 rounded' placeholder='Product quantity maximum 99!' type="number" required {...register("quantity", { min: 1, max: 99 })} />
                <input className='mb-2 border-2 py-2 px-2 rounded bg-slate-500 text-white font-semibold hover:bg-slate-700' type="submit" value='Add Item' />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddItem;