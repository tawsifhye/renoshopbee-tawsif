import React from 'react';

const Navbar = (props) => {
    const { cart } = props;
    console.log(cart);
    return (
        <>
            <div className="bg-dark">
                <span className="navbar-nav me-auto mb-2 d-flex flex-row">
                    <li className="nav-item me-3">
                        <span className="nav-link text-white"><i className="fas fa-phone-alt"></i></span>
                    </li>
                    <li className="nav-item me-5">
                        <span className="nav-link text-white">+1 123 456 789</span>
                    </li>
                    <li className="nav-item me-3">
                        <span className="nav-link text-white"><i className="fas fa-envelope"></i></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link text-white">info@company.com</span>
                    </li>
                    <span className="d-flex ms-auto mt-2">
                        <li><i className="fab fa-facebook-f text-white me-5"></i></li>
                        <li><i className="fab fa-twitter text-white me-5"></i></li>
                        <li><i className="fab fa-instagram text-white me-5"></i></li>
                        <li><i className="fab fa-linkedin-in text-white me-5"></i></li>
                        <li><i className="fab fa-behance text-white me-5"></i></li>
                    </span>
                </span>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#"><span className="text-success">RENOSHOP</span>BEE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">JEWELLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ACCESSORIES</a>
                            </li>
                        </ul>
                        <span><i className="fas fa-shopping-cart ms-0"></i>{cart.length}</span>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;