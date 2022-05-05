import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Items/Item/Item';

const ManageInventory = () => {
    const [items, setItems] = useItems();

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
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
        </div>
    );
};

export default ManageInventory;