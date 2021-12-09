import React from 'react';
import '../Components/Component.css'
import visa from '../images/visa.png'
import paypal from '../images/paypal.png'
import amazon from '../images/amazon.png'
import mastercard from '../images/mastercard.png'
import amex from '../images/amex.png'
const Footer = () => {
    return (
        <>
            <div className='container footer p-5'>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-4 row-cols-xl-4 p-4">
                    <div className='col'>
                        <h5>INFORMATION</h5>
                        <ul class="list-group mt-4">
                            <li class=""><a href="">Delivery Information</a></li>
                            <li class=""><a href="">Discount</a></li>
                            <li class=""><a href="">Sitemap</a></li>
                            <li class=""><a href="">Privacy Policy</a></li>
                            <li class=""><a href="">My Account</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>MY ACCOUNT</h5>
                        <ul class="list-group mt-4">
                            <li class=""><a href="">Delivery Information</a></li>
                            <li class=""><a href="">Discount</a></li>
                            <li class=""><a href="">Sitemap</a></li>
                            <li class=""><a href="">Privacy Policy</a></li>
                            <li class=""><a href="">My Account</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>HELP</h5>
                        <ul class="list-group mt-4">
                            <li class=""><a href="">Delivery Information</a></li>
                            <li class=""><a href="">Discount</a></li>
                            <li class=""><a href="">Sitemap</a></li>
                            <li class=""><a href="">Privacy Policy</a></li>
                            <li class=""><a href="">My Account</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>CONTACT INFO</h5>
                        <ul class="list-group mt-4">
                            <li><a href=""><i class="fas fa-globe-asia"></i> </a></li>
                            <li><a href=""><i className="fas fa-phone-alt"></i> +1 234 5678 9999</a></li>
                            <li><a href=""><i className="fas fa-envelope"></i> Address<span class="text-success">mail@domain.com</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row bg-dark text-white py-1'>
                    <div className='col-8 text-center'>Copyright 2017 RenoshopBee all right reserved</div>
                    <div className='col-4'>
                        <img className='me-3' src={visa} alt="" />
                        <img className='me-3' src={paypal} alt="" />
                        <img className='me-3' src={amazon} alt="" />
                        <img className='me-3' src={amex} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;