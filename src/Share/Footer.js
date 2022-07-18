import React from 'react';
import '../../src/Pages/Style/Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='footer lg:flex md:flex justify-between items-center'>
            <div className='lg:mx-20'>
                <p className='text-3xl font-bold mb-5 mt-12'><a href="">Portside Wharf</a></p>
                <address className='text-lg leading-10'>
                    Level 1, Portside Wharf, 39 <br /> Hercules St <br />
                    Hamilton QLD 4007 <br />
                    (opposite Dendy Cinemas) <br />
                    (07) 3268 6655
                </address>
            </div>
            <div className='flex footer-icon'>
                <div className='icon1'>
                    <a href="https://www.facebook.com/" target="_blank"><AiFillFacebook /></a>
                </div>
                <div className='icon2'>
                    <a href="https://instagram.com/" target="_blank"><ImInstagram /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;