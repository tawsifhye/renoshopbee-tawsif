import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="bg-dark">
                <span class="navbar-nav me-auto mb-2 d-flex flex-row">
                    <li class="nav-item me-3">
                        <span class="nav-link text-white"><i class="fas fa-phone-alt"></i></span>
                    </li>
                    <li class="nav-item me-5">
                        <span class="nav-link text-white">+1 123 456 789</span>
                    </li>
                    <li class="nav-item me-3">
                        <span class="nav-link text-white"><i class="fas fa-envelope"></i></span>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link text-white">info@company.com</span>
                    </li>
                    <span className="d-flex ms-auto mt-2">
                        <li><i class="fab fa-facebook-f text-white me-5"></i></li>
                        <li><i class="fab fa-twitter text-white me-5"></i></li>
                        <li><i class="fab fa-instagram text-white me-5"></i></li>
                        <li><i class="fab fa-linkedin-in text-white me-5"></i></li>
                        <li><i class="fab fa-behance text-white me-5"></i></li>
                    </span>
                </span>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#"><span className="text-success">RENOSHOP</span>BEE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto fw-bold">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">WOMEN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">MEN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">KIDS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">JEWELLERY</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ACCESSORIES</a>
                            </li>
                        </ul>
                        <span><i class="fas fa-shopping-cart ms-0"></i>3</span>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;