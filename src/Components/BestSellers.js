import React from 'react';
import '../Components/Component.css'
import watch from '../images/watch.jpg'
const BestSellers = (props) => {
    const products = [1, 2, 3, 4]
    return (
        <>
            <div className="container-fluid row mt-5 p-5">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
                    <div className="col d-flex flex-column pt-5 m">
                        <h3>BEST SELLERS</h3>
                        <h6 className="text-success">The best productions from us</h6>
                        <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptate?</p>
                    </div>

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
        </>
    );
};

export default BestSellers;