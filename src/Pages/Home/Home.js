import React from 'react';

import Banner from '../Banner/Banner';
import Excitements from '../Excitement/Excitements';
import Memories from '../Memories/Memories';
import Menu from '../Menu/Menu';
import Tradition from '../Tradition/Tradition';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Menu/>
            <Tradition/>
            <Excitements/>
            <Memories/>
        </div>
    );
};

export default Home;