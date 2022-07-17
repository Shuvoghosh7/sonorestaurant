import React from 'react';
import img from '../../img/Gift-Card.jpg'
import '../../Pages/Style/GiftCards.css'
const GiftCards = () => {
    return (
        <div className='GiftCards-container'>
            <div className='gift-image'>
                <img src={img} alt="" />
            </div>
            <div className='tradition flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-center text-3xl font-bold mb-5'>SHARE THEE</h1>
                    <h2 className='text-center text-4xl font-bold mb-6'>EXPERIENCE</h2>
                    <h3 className='text-center text-3xl leading-10 mb-20'>Sono Gift Cards</h3>

                    <p className='ex-button'><a href="">Purchase Now </a></p>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;