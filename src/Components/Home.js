import React, { useState } from 'react';
import Banner from './Banner';
import BestSellers from './BestSellers';
import FeaturedProducts from './FeaturedProducts';
import Navbar from './Navbar';
import Offer from './Offer';

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
            <Offer />
            <FeaturedProducts handleAddToCart={handleAddToCart} />
        </div>
    );
};

export default Home;