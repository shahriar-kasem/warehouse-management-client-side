import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' 

const Footer = () => {
    const getCurrentDate = new Date();
    const day = getCurrentDate.getDate();
    const month = getCurrentDate.getMonth();
    const year = getCurrentDate.getFullYear();
    const finalDate = day + '/' + month + '/' + year;
    return (
        <footer>
            <div className='bg-emerald-400 text-white py-3 font-bold'>
                <p className='py-1'>Follow us on: <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> <a className='hover:text-blue-500' target='_blank' href="https://www.facebook.com/">Facebook</a> , <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> <a className='hover:text-blue-500' target='_blank' href="https://twitter.com/">Twitter</a> </p>
                <p className='py-1'>Contact us: bblwarehouse@gmail.com</p>
                <p className='py-1'>© All rights reserved. {finalDate}</p>
            </div>
        </footer>
    );
};

export default Footer;