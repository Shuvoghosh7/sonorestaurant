import React from 'react';
import '../../Pages/Style/Banner.css'
import img from '../../img/Sono_Logo.png'
const Banner = () => {
    return (
        <div className='banner-bg'>
            
            <div>
                <img className='logo' src={img} alt="" />
            </div>
            <div className='broder-line'>

            </div>
            <div>
                <p className='title'>PORTSIDE WHARF</p>
            </div>
        </div>
    );
};

export default Banner;