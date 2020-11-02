import React from "react";
// import { NavLink } from "react-router-dom";

const CommonHeader = () => {
  // const activeStyle = { color: "#F15B2A" };
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="top-bar">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <a className="navbar-brand" href="/"><img src="images/logo.png" alt="#" /></a>
                            </div>
                            <div className="col-md-9 d-flex align-items-end">
                                <ul className="ml-auto">
                                    <li>
                                        <img src="images/mail-icon.png" alt="#" />
                                        <div>
                                            <span>Mail us</span>
                                            <h4>info@medenin</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="images/call-icon.png" alt="#" />
                                        <div>
                                            <span>Toll Free</span>
                                            <h4>+123 456 7890</h4>
                                        </div>
                                    </li>
                                    <li className="appointment-btn">
                                        <a href="appointment.html" className="btn btn-primary">Make Appointment</a>
                                        <i className="fas fa-search"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CommonHeader;
