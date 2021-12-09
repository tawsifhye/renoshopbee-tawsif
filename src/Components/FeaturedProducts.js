import React from 'react';
import '../Components/Component.css'
import watch from '../images/watch.jpg'
const FeaturedProducts = (props) => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='container-fluid mt-5'>
            <h1 className='text-center'>FEATURED PRODUCTS</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5 p-4">
                {
                    products.map((product) => (<div key={product} className="col">
                        <div className="card h-100 product">
                            <img src={watch} className="card-img-top" alt="..." />
                            <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart"></i>
                            <i className="fas fa-heart"></i>
                            <div className="card-body">
                                <h6 className="card-title">Cruise Dual Analog</h6>
                                <p className="card-text text-success">$250.00</p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;