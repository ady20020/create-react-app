import React from "react";

const NavBig = () => {
    
    return (
        <div className="light nav-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!-- Nav menu --> */}
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto nav-sub">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home </a>
                                    </li>
                                    </ul>
                                <ul className="nav-icon-wrap">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fab fa-google-plus-g"></i></a>
                                    </li>
                                    <li className="nav-item cart-seperate">
                                        <a className="nav-link" href="#"><i className="fas fa-shopping-cart fa-top-search"></i> <span>2</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fas fa-bars"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* <!--//End Nav menu --> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBig;
