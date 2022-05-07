import React from 'react';

const Footer = () => {
    const getCurrentDate = new Date();
    const day = getCurrentDate.getDate();
    const month = getCurrentDate.getMonth();
    const year = getCurrentDate.getFullYear();
    const finalDate = day + '/' + month + '/' + year;
    return (
        <footer>
            <div className='bg-emerald-400 text-white py-3 font-bold'>
                <p className='py-1'>Follow us on: Facebook, Twitter</p>      
                <p className='py-1'>Contact us: bblwarehouse@gmail.com</p>
                <p className='py-1'>© All rights reserved. {finalDate}</p>
            </div>
        </footer>
    );
};

export default Footer;