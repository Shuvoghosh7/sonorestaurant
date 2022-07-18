import React from 'react';
import giftImg from '../../../src/img/Gift-Card.jpg'
import '../../Pages/Style/GiftCards.css'
const GiftCards = () => {
    return (
        <div className='gift-container' id='gift-container'>
            <div className='gift-image'>
                <img src={giftImg} alt="" />
            </div>
            <div className='gift-text flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-center text-4xl font-bold mb-5'>SHARE THE</h1>
                    <h2 className='text-center text-3xl font-bold mb-6'>EXPERIENCE</h2>
                    <h3 className='text-center text-3xl leading-10 mb-12'>Sono Gift Cards</h3>
                    <p className='gift-button'>Purchase Now</p>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;