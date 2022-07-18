import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Style/Navber.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <a href="/">
                <div className='manu-item'>HOME</div>
            </a>
            <a href="#menu">
                <div className='manu-item'>MENU</div>
            </a>
            <a href="#teppanyaki">
                <div className='manu-item'>TEPPANYAKI</div>
            </a>
            <a href="#memories">
                <div className='manu-item'>EVENTS & PRIVATE DINING</div>
            </a>
            <a href="#gift-container">
                <div className='manu-item'>GIFT CARDS</div>
            </a>
            <a href="#contact">
                <div className='manu-item'>CONTACT</div>
            </a>
            <a href="">
                <div className='manu-item'>RESERVATIONS</div>
            </a>
        </div>
    );
};

export default Navbar;