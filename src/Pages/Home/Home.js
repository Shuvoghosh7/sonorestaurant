import React from 'react';

import Banner from '../Banner/Banner';
import Excitements from '../Excitement/Excitements';
import GiftCards from '../GiftCards/GiftCards';
import Memories from '../Memories/Memories';
import Menu from '../Menu/Menu';
import Program from '../PROGRAM/Program';
import Tradition from '../Tradition/Tradition';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Tradition/>
            <Excitements/>
            <Memories/>
            <GiftCards/>
            <Program/>
        </div>
    );
};

export default Home;