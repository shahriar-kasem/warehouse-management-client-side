import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item, handleDeleteItem }) => {
    const navigate = useNavigate();

    const { description, img, name, price, quantity, supplier, _id } = item;

    return (
        <section className='border-2 rounded-3xl hover:bg-green-300 hover:border-red-300'>
            <div className='item-container'>
                <img className='p-1' src={img} alt="" />
                <div className='mx-3'>
                    <h1 className='font-extrabold text-3xl text-rose-500 py-1'>{name}</h1>
                    <h3 className='font-bold text-xl py-1 text-rose-400'>Price: ${price}</h3>
                    {
                        quantity === 0 ?
                            <h3 className='font-bold text-xl py-1 text-rose-400'>Sold Out</h3>
                            :
                            <h4 className='font-semibold text-lg text-rose-400'>Quantity: {quantity}</h4>
                    }
                    <h5 className='font-semibold text-lg pb-1 text-rose-400'>Supplier name: {supplier}</h5>
                    <p><span className='text-blue-600 font-semibold'>Product details:</span> {description}</p>
                </div>
            </div>
            <button className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2 mx-5' onClick={() => navigate(`/inventory/${_id}`)}>Update</button>
            {
                handleDeleteItem &&
                <button onClick={() => handleDeleteItem(_id)} className='bg-rose-400 px-5 py-1 mt-1 rounded hover:bg-rose-500 text-white mb-2'>Delete</button>
            }
        </section>
    );
};

export default Item;