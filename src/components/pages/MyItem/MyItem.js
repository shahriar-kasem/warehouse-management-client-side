import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import Item from '../Items/Item/Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const [customerItems, setCustomerItems] = useState([]);

    useEffect(() => {
        const match = items.filter(item => item.email === user.email);
        setCustomerItems(match);
    }, [user, items])

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
                    toast('Item deleted successfully')
                })
        }
    }

    return (
        <div className='my-5'>
            <h1 className='text-green-500 font-bold text-3xl'><i>Here is your item list</i></h1>
            <div>
                {
                    customerItems.length === 0 ?
                        <div><h1 className='my-10 text-red-700 font-semibold text-xl'>Add some item to see here!!</h1></div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 my-5'>
                            {
                                customerItems.map(item => <Item
                                    key={item._id}
                                    item={item}
                                    handleDeleteItem={handleDeleteItem}
                                ></Item>)
                            }
                        </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyItem;