import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFeedback from '../../../../hooks/useFeedback';
import useItems from '../../../../hooks/useItems';
import Footer from '../../../shared/Footer/Footer';
import Feedback from '../../Feedback/Feedback';
import Item from '../../Items/Item/Item';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    const [items] = useItems();
    const [feedbacks] = useFeedback();
    const navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>
            <section>
                <h2 className='text-green-500 font-extrabold text-5xl'><i>Warehouse Items</i></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 my-5'>
                    {
                        items.slice(1, 7).map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
                <div onClick={() => navigate(`/inventory`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded lg:mx-24 md:mx-10 mx-5'>
                    <button className=' px-5 py-1 mt-1  text-white mb-2 mx-5'>See Full Inventory</button>
                </div>
            </section>
            <Services></Services>
            <section className='bg-blue-100 py-5'>
                <div className='my-5'>
                    <h1 className='my-3 font-bold text-green-500 text-3xl'><i>What Our Clients Say About US</i></h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-5 lg:mx-10 mx-1'>
                        {
                            feedbacks.slice(0,3).map(feedback => <Feedback
                                key={feedback._id}
                                feedback={feedback}
                            ></Feedback>)
                        }
                    </div>
                    <div onClick={() => navigate(`/feedback`)} className='my-5 bg-rose-400 hover:bg-rose-500 rounded lg:mx-24 md:mx-10 mx-5'>
                    <button className=' px-5 py-1 mt-1  text-white mb-2 mx-5'>See more feedback</button>
                </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;