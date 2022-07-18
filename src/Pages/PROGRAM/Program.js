import React from 'react';
import slider1 from '../../img/part4/img.jpg'
import slider2 from '../../img/part4/img2.jpg'
import slider3 from '../../img/part4/img3.jpg'
import '../../Pages/Style/Program.css'
const Program = () => {
    return (
        <div className='program-container' id='#Program'>
            <div className='tradition flex justify-center items-center'>
                <div className='text'>
                    <h1 className='text-center text-4xl font-bold mb-5'>SONO SAKURU</h1>
                    <h2 className='text-center text-3xl font-bold mb-6'>LOYALTY PROGRAM</h2>
                    <h3 className='text-center text-3xl leading-10 mb-20'>Exclusive rewards for Sono's most loyal <br/> customers</h3>
                    <div className='flex justify-center items-center'>
                        <p className='pro-button'><a href="">Enquire Now</a></p>
                        <p className='pro-button'><a href="https://www.sonorestaurant.com.au/wp-content/uploads/2020/03/Sono-Sakuru.pdf">Program</a></p>
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

export default Program;