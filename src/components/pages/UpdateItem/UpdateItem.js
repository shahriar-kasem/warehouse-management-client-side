import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../hooks/useItems';

const UpdateItem = () => {
    const [items] = useItems();
    const [selectedItem, setSelectedItem] = useState({});
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate();

    useEffect(() => {
        const match = items.find(item => item._id === id)
        setSelectedItem(match);
        console.log(match)
    }, [id, items, selectedItem])

    return (
        <section className='my-5'>
            <div className='flex flex-col items-center border-4 mx-10 rounded-2xl'>
                <h1 className='my-2 font-bold text-red-600'>Product ID: {selectedItem?._id}</h1>
                <img className='my-3' src={selectedItem?.img} alt="" />
                <h1 className='font-extrabold text-3xl text-rose-500 py-1'>{selectedItem?.name}</h1>
                <h3 className='font-bold text-xl py-1 text-rose-400'>Price: ${selectedItem?.price}</h3>
                <h4 className='font-semibold text-lg text-rose-400'>Quantity: {selectedItem?.quantity}</h4>
                <h5 className='font-semibold text-lg pb-1 text-rose-400'>Supplier name: {selectedItem?.supplier}</h5>
                <p><span className='text-blue-600 font-semibold'>Product details:</span> {selectedItem?.description}</p>
                <div className='my-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <button className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2 mx-5'>Delivered</button>
                    <p>or</p>
                        <input className='border-4 rounded pl-2 border-blue-300' type="number" placeholder='Add item quantity' {...register("quantity", { min: 0, max: 99 })} />
                        <br />
                        <input className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2 mx-5' type="submit" value='Add Quantity' />
                    </form>
                </div>
            </div>
            <div onClick={() => navigate(`/inventory/manage`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded mx-24'>
                <button className=' px-5 py-1 mt-1  text-white mb-2 mx-5'>Manage Inventory</button>
            </div>
        </section>
    );
};

export default UpdateItem;