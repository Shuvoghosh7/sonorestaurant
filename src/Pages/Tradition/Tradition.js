import React from 'react';
import slider1 from '../../img/part1/img1.jpg'
import slider2 from '../../img/part1/img2.jpg'
import slider3 from '../../img/part1/img4.jpg'
import '../../Pages/Style/Tradition.css'


const Tradition = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
            <div className='tradition flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-heading'>EXPERIENCE THE</h1>
                    <h2 className='text-title'>TRADITION</h2>
                    <p className='button'>BOOK NOW</p>
                </div>
            </div>
            <div className='slider-frame'>
                <div class="container">
                    <div class="wrapper">
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

export default Tradition;