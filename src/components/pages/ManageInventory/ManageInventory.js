import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Items/Item/Item';

const ManageInventory = () => {
    const [items] = useItems();

    const handleDeleteItem = (id) => {

        console.log(id)
    }

    return (
        <div className='mt-5'>
            <h2 className='text-rose-500 font-extrabold text-5xl'>Manage Warehouse Items</h2>
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