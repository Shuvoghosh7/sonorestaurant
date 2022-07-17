import React from 'react';
import img from '../../img/locationjpg.jpg'
import '../../Pages/Style/Location.css'
const Location = () => {
    return (
        <div className='location' id='location'>
            <a href="" target="_blank">
                <div className='image'>
                    <img src={img} alt="" />
                </div>
            </a>
        </div>
    );
};

export default Location;