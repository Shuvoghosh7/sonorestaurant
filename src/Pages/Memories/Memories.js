import React from 'react';
import slider1 from '../../img/part3/img3.jpg'
import slider2 from '../../img/part3/img2.jpg'
import slider3 from '../../img/part3/img3.jpg'
import '../Style/Memories.css'
const Memories = () => {
    return (
        <div className='memories-container' id='memories'>
            <div className='memories flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-center text-4xl font-bold mb-5'>EXPERIENCE THE</h1>
                    <h2 className='text-center text-3xl font-bold mb-6'>MEMORIES</h2>
                    <h3 className='text-center text-3xl leading-10 mb-20'>Events & Private Dining</h3>
                    <div className='flex'>
                        <p className='me-button'><a href="">BOOK NOW</a></p>
                        <p className='me-button'><a href="">Enquire Now</a></p>
                    </div>
                </div>
            </div>
            <div className='slider-frames'>
                <div class="containers">
                    <div class="wrappers">
                        <img src={slider1} alt="" />
                        <img src={slider2} alt="" />
                        <img src={slider3} alt="" />
                        <img src={slider1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Memories;