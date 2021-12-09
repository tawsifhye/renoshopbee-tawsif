import React, { useState } from 'react';
import Banner from './Banner';
import BestSellers from './BestSellers';
import Navbar from './Navbar';

const Home = () => {
    const [cart, setCart] = useState("");

    const handleAddToCart = (item) => {
        const newInventory = [...cart, item];
        setCart(newInventory);
    };
    return (
        <div>
            <Navbar cart={cart} />
            <Banner />
            <BestSellers handleAddToCart={handleAddToCart} />
        </div>
    );
};

export default Home;