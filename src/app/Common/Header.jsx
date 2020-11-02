import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
     <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Nav menu --> */}
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html"><img src="./images/logo.png" alt="#" /></a>
              <button className="navbar-toggler nav-custome1" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle
                            navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                  <NavLink className="nav-link" href="#" id="navbarDropdown"
                      role="button" data-toggle="dropdown" aria-haspopup="true" to="/" exact> Home </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/Appointment' className="nav-link btn btn-outline-primary appointment-btn-top">Appointment</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <!--//End Nav menu --> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
