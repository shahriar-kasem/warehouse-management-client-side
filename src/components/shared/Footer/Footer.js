import React from 'react';

const Footer = () => {
    const getCurrentDate = new Date();
    const day = getCurrentDate.getDate();
    const month = getCurrentDate.getMonth();
    const year = getCurrentDate.getFullYear();
    const finalDate = day + '/' + month + '/' + year;
    return (
        <footer>
            <div className='bg-black text-white py-3'>
                <p className='py-1'>Contact us: unknown@gmail.com</p>
                <p className='py-1'>Follow us on: Facebook, Twitter</p>
                <p className='py-1'>© All rights reserved. {finalDate}</p>
            </div>
        </footer>
    );
};

export default Footer;