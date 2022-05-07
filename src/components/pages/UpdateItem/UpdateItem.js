import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateItem = () => {
    const [selectedItem, setSelectedItem] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://powerful-journey-42037.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedItem(data))
    }, [id])

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const newQuantity = selectedItem.quantity + parseInt(data.quantity);
        const newItem = { ...selectedItem, quantity: newQuantity };
        setSelectedItem(newItem);

        const url = `https://powerful-journey-42037.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                toast('Item quantity added successfully!');
            })
    };

    const handleDeliveredItem = () => {
        if (selectedItem.quantity < 1) {
            toast('Selected item already Sold Out!');
        }
        else {
            const newQuantity = selectedItem.quantity - 1;
            const newItem = { ...selectedItem, quantity: newQuantity };
            setSelectedItem(newItem);

            const url = `https://powerful-journey-42037.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item successfully delivered');
                })
        }
    }

    return (
        <section>
            <div className='my-5'>
                <div className='flex flex-col items-center border-4 mx-10 rounded-2xl'>
                    <h1 className='my-2 font-bold text-red-600'>Product ID: {selectedItem?._id}</h1>
                    <img className='my-3' src={selectedItem?.img} alt="" />
                    <h1 className='font-extrabold text-3xl text-rose-500 py-1'>{selectedItem?.name}</h1>
                    <h3 className='font-bold text-xl py-1 text-rose-400'>Price: ${selectedItem?.price}</h3>
                    {
                        selectedItem?.quantity === 0 ?
                            <h3 className='font-bold text-xl py-1 text-rose-400'>Sold Out</h3>
                            :
                            <h4 className='font-semibold text-lg text-rose-400'>Quantity: {selectedItem?.quantity}</h4>
                    }
                    <h5 className='font-semibold text-lg pb-1 text-rose-400'>Supplier name: {selectedItem?.supplier}</h5>
                    <p><span className='text-blue-600 font-semibold'>Product details:</span> {selectedItem?.description}</p>
                    <div className='my-3'>
                        <button onClick={handleDeliveredItem} className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mx-5'>Delivered</button>
                        <p className='my-2 font-bold'>or</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-4 rounded pl-2 border-blue-300' required type="number" placeholder='Add item quantity' {...register("quantity", { min: 0, max: 99 })} />
                            <br />
                            <input className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2 mx-5' type="submit" value='Restock the item' />
                        </form>
                    </div>
                </div>
                <div onClick={() => navigate(`/inventory/manage`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded lg:mx-24 md:mx-10 mx-5'>
                    <button className='px-5 py-1 mt-1  text-white mb-2 mx-5'>Manage Inventory</button>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
};

export default UpdateItem;