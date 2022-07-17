import React from 'react';

import Banner from '../Banner/Banner';
import Excitements from '../Excitement/Excitements';
import Menu from '../Menu/Menu';
import Tradition from '../Tradition/Tradition';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Tradition/>
            <Excitements/>
        </div>
    );
};

export default Home;