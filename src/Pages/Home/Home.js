import React from 'react';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Excitements from '../Excitement/Excitements';
import GiftCards from '../GiftCards/GiftCards';
import Location from '../Location/Location';
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
            <Contact/>
            <Location/>
        </div>
    );
};

export default Home;