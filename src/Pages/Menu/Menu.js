import React from 'react';
import '../../Pages/Style/Menu.css'
import logo from '../../img/Small-Flowers.png'
const Menu = () => {
    return (
        <div className='menu mt-[-70px]' id='menu'>
            <h1 className='menu-title'>EXPERIENCE THE TRUE TASTE OF TRADITION</h1>
            <div className='mx-12 grid lg:grid-cols-4 md:grid-cols-2'>
                <div className='menu-item'>
                    <a href="https://www.sonorestaurant.com.au/wp-content/uploads/2022/06/Sono-Food-Menu-160622-LR.pdf" target="_blank">
                        <div className='ml-6 menu-item-sm'>
                            <div className='manu-img'>
                                <img src={logo} alt="" />
                            </div>
                            <p className='menu-name'>A LA CARTE</p>
                        </div>
                    </a>
                </div>
                <div className='menu-item menu-item-md'>
                    <a href="https://www.sonorestaurant.com.au/wp-content/uploads/2021/11/Sono-Functions-2021.pdf" target="_blank">
                        <div className='ml-6 menu-item-sm'>
                            <div className='manu-img'>
                                <img src={logo} alt="" />
                            </div>
                            <p className='menu-name'>FUNCTIONS</p>
                        </div>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="https://www.sonorestaurant.com.au/wp-content/uploads/2021/04/Sono-Teppanyaki-Menu-010421-LR.pdf" target="_blank">
                        <div className='ml-6 menu-item-sm'>
                            <div className='manu-img'>
                                <img src={logo} alt="" />
                            </div>
                            <p className='menu-name'>TEPPANYAKI</p>
                        </div>
                    </a>
                </div>
                <div className='menu-item-last'>
                    <a href="https://www.sonorestaurant.com.au/wp-content/uploads/2022/05/Sono_Drinks_Menu_130522.pdf" target="_blank">
                        <div className='ml-6 menu-item-sm'>
                            <div className='manu-img'>
                                <img src={logo} alt="" />
                            </div>
                            <p className='menu-name'>BEVERAGES</p>
                        </div>
                    </a>
                </div>
            </div>



        </div>
    );
};

export default Menu;