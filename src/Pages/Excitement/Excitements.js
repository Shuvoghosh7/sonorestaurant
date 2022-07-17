import React from 'react';
import slider1 from '../../img/parit-2/img1.jpg'
import slider2 from '../../img/parit-2/img2jpg.jpg'
import slider3 from '../../img/parit-2/img3.jpg'
import '../../Pages/Style/Excitements.css'
const Excitements = () => {
    return (
        <div id='teppanyaki' className='grid lg:grid-cols-2 md:grid-cols-1'>
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
            <div className='tradition flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-center text-4xl font-bold mb-5'>EXPERIENCE THE</h1>
                    <h2 className='text-center text-3xl font-bold mb-6'>EXCITEMENT</h2>
                    <h3 className='text-center text-3xl leading-10 mb-12'>Teppanyaki at Sono <br/> Saturday & Sunday Lunch, <br/> Friday & Saturday Dinner</h3>
                    <p className='ex-button'>BOOK NOW</p>
                </div>
            </div>
        </div>
    );
};

export default Excitements;