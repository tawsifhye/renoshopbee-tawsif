import React from 'react';
import offer1 from '../images/first-offer.png'
import offer2 from '../images/offer2.png'
import offer3 from '../images/offer3.png'
import special_offer from '../images/special-offer.png'
import free_delivery from '../images/free-delivery.png'
import return_policy from '../images/return-plicy.png'

const Offer = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 text-center p-5" style={{ backgroundColor: "#F5F6F9" }}>
                    <div>
                        <img src={special_offer} alt="" className='p-3' />
                        <h6>SPECIAL OFFERS</h6>
                        <small>Shop Big Save Big</small>
                    </div>
                    <div>
                        <img src={free_delivery} alt="" className='p-3' />
                        <h6>FREE DELIVERY</h6>
                        <small>On Orders Above $99</small>
                    </div>
                    <div>
                        <img src={return_policy} alt="" className='p-3' />
                        <h6>30 DAYS RETURN</h6>
                        <small>Policy We Offers</small>
                    </div>
                    <div>
                        <img src={special_offer} alt="" className='p-3' />
                        <h6>SPECIAL OFFERS</h6>
                        <small>Shop Big Save Big</small>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                    <div style={{ backgroundColor: "#2E3348" }}>
                        <img className='img-fluid p-5' src={offer1} alt="" />
                    </div>
                    <div style={{ backgroundColor: "#34394F" }}>
                        <img className='img-fluid p-5' src={offer2} alt="" />
                    </div>
                    <div style={{ backgroundColor: "#2E3348" }}>
                        <img className='img-fluid p-5' src={offer3} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Offer;