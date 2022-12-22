import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <a href="/"><img alt="" className="logo" src="images/logo-1.png" /></a>
                  <div className="spacer-20"></div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="widget">
                  <h5>Demo</h5>
                  <ul>
                    <li><a href="index.html">Saas</a></li>
                    <li><a href="index-startup.html">Startup</a></li>
                    <li><a href="index-coworking.html">Co-working</a></li>
                    <li><a href="index-agency.html">Agency</a></li>
                    <li><a href="index-apps.html">Apps</a></li>
                    <li><a href="service-single.html">Email Marketing</a></li>
                    <li><a href="pricing-plans.html">Pricing Plan</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="widget">
                  <h5>Pages</h5>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/pricing-plans">Pricing Plans</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-4">
                <div className="widget">
                  <h5>Newsletter</h5>

                  <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
                  <form action="blank.php" className="row" id="form_subscribe" method="post" name="form_subscribe">
                    <div className="col text-center">
                      <input className="form-control" id="name_1" name="name_1" placeholder="enter your email" type="text" /> <a href="#" id="btn-submit"><i className="arrow_right"></i></a>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                  <div className="spacer-10"></div>
                  <small>Your email is safe with us. We don't spam.</small>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 sm-text-center mb-sm-30">
                <div className="mt10">&copy; Copyright 2022 - Powered by PC-Software</div>
              </div>

              <div className="col-md-6 text-md-right text-sm-left">
                <div className="social-icons">
                  <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                  <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                  <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                  <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                  <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;