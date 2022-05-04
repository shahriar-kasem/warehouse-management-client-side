import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../../hooks/useItems';
import Footer from '../../../shared/Footer/Footer';
import Item from '../../Items/Item/Item';
import Banner from '../Banner/Banner';

const Home = () => {
    const [items] = useItems();
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <section>
                <h2 className='text-rose-500 font-extrabold text-5xl'>Warehouse Items</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 my-5'>
                    {
                        items.slice(7, 10).map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
                <div onClick={() => navigate(`/inventory`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded mx-24'>
                    <button className=' px-5 py-1 mt-1  text-white mb-2 mx-5'>See Full Inventory</button>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;