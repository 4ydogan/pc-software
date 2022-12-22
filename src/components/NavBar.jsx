import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="header-light transparent scroll-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between">
                  <div className="align-self-center header-col-left">
                    <div id="logo">
                      <a href="/">
                        <img alt="" src="images/logo-1.png" />
                      </a>
                    </div>
                  </div>
                  <div className="align-self-center ml-auto header-col-mid">
                    <ul id="mainmenu">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/pricing-plans">Pricing Plans</a></li>
                      <li><a href="/news">News</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="align-self-center ml-auto header-col-right">
                    <a className="btn-custom" href="#"><i className="fa fa-arrow-down"></i> Buy Now</a>
                    <span id="menu-btn"></span>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default NavBar;