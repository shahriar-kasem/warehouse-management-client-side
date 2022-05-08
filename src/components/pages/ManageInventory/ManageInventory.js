import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Items/Item/Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            const url = `https://powerful-journey-42037.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    if(data.deletedCount === 1){
                        toast('Item deleted successfully')
                    }
                })
        }
    }

    return (
        <div className='mt-5'>
            <h2 className='text-green-500 font-extrabold text-5xl'><i>Manage Warehouse Items</i></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 my-5'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        handleDeleteItem={handleDeleteItem}
                    ></Item>)
                }

            </div>
            <div onClick={() => navigate(`/newitem`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded lg:mx-24 md:mx-10 mx-5'>
                <button className=' px-5 py-1 mt-1 font-bold text-white mb-2 mx-5'>Add new item</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ManageInventory;