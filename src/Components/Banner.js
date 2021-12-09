import React from 'react';
import '../Components/Component.css'
const Banner = () => {
    return (
        <div>
            <div className=" container-fluid home-banner">
                <div className="w-50">
                    <h1 className="p-1 display-4 fw-bold">THE BEST </h1>
                    <h1 className="p-1 text-success display-4 fw-bold">WOOCOMMERCE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea sed facilis libero tenetur voluptatem culpa quas, amet delectus? Autem!</p>
                    <button className="btn border border-dark">BUY NOW</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;