import React from 'react';
import image1 from '../images/form-img1.png'
import image2 from '../images/form-img2.png'
import image3 from '../images/form-img3.png'
import image4 from '../images/form-img4.png'
const FormSection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    <div className='text-white text-center py-5' style={{ backgroundColor: "#363A4C" }} >
                        <h2>Get Out Special Discount</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ducimus.</p>
                        <input className='py-1' type="email" placeholder='E-mail address' />
                        <button className='btn btn-success ms-2'>GET CUPON NOW</button>
                    </div>
                    <div className='container text-center d-flex flex-column flex-sm-column flex-md-row justify-content-around align-items-center' style={{ backgroundColor: "#F5F6F9" }} >
                        <div className='p-3'><img src={image1} alt="" /></div>
                        <div className='p-3'><img src={image2} alt="" /></div>
                        <div className='p-3'><img src={image3} alt="" /></div>
                        <div className='p-3'><img src={image4} alt="" /></div>
                    </div>

                </div>
                <div className="row p-2">
                    <div className=' col-12 col-sm-12 col-md-12 col-lg-6 text-center border-end'>
                        <p>We're confident we've provided all the best for you Stay connect with us</p>
                    </div>
                    <div className=' col-12 col-sm-12 col-md-12 col-lg-3 text-center border-end py-1'>
                        <i className="fab fa-facebook-f me-5"></i>
                        <i className="fab fa-twitter me-5"></i>
                        <i className="fab fa-instagram  me-5"></i>
                        <i className="fab fa-linkedin-in me-5"></i>
                        <i className="fab fa-behance"></i>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FormSection;