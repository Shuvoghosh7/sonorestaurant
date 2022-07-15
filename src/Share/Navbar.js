import React from 'react';
import '../Pages/Style/Navber.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <ul>
         
                    <li><a href="">Home</a></li>
                    <li><a href="">MENU</a></li>
                    <li><a href="">TEPPANYAKI</a></li>
                    <li><a href="">EVENTS & PRIVATE DINING</a></li>
                    <li><a href="">GIFT CARDS</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href=""> RESERVATIONS</a></li>
              
            </ul> */}

            <a href="">
                <div className='manu-item'>Home</div>
            </a>
            <a href="">
                <div className='manu-item'>MENU</div>
            </a>
            <a href="">
                <div className='manu-item'>TEPPANYAKI</div>
            </a>
            <a href="">
                <div className='manu-item'>EVENTS & PRIVATE DINING</div>
            </a>
            <a href="">
                <div className='manu-item'>GIFT CARDS</div>
            </a>
            <a href="">
                <div className='manu-item'>CONTACT</div>
            </a>
            <a href="">
                <div className='manu-item'>RESERVATIONS</div>
            </a>
        </div>
    );
};

export default Navbar;