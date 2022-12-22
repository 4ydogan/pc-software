import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <>
          <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section style={{ backgroundImage: 'url(images/background/1.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }} className="full-height vertical-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                    <h4>Whatever business you do</h4>
                    <div className="spacer-10"></div>
                    <h1>bluetec is what your <span className="id-color">business</span> need</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    <div className="spacer-20"></div>
                    <a className="btn-custom" href="#">Learn More</a>
                    <div className="mb-sm-30"></div>
                  </div>

                  <div className="col-lg-6 offset-lg-1 wow fadeInLeft" data-wow-delay=".5s">
                    <img src="images/misc/1.png" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </section>

            <section id="section-highlight" style={{ backgroundImage: 'url(images/background/2.png)', backgroundSize: 'cover', backgroundPositionX: 'bottom' }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="text-center">
                      <h2><span className="uptitle id-color">Our Services</span>How does it work?</h2>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className="spacer-20"></div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6 mb40 wow fadeInUp" data-wow-delay="0s">
                    <div className="feature-box f-boxed style-3">
                      <i className="bg-color i-circle fa fa-wordpress"></i>
                      <div className="text">
                        <a href="service-single.html"><h4>Website Design</h4></a>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                      </div>
                      <i className="wm fa fa-wordpress"></i>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                    <div className="feature-box f-boxed style-3">
                      <i className="bg-color-2 i-circle fa fa-paper-plane-o"></i>
                      <div className="text">
                        <a href="service-single.html"><h4>Email Marketing</h4></a>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                      </div>
                      <i className="wm fa fa-paper-plane-o"></i>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".5s">
                    <div className="feature-box f-boxed style-3">
                      <i className="bg-color-3 i-circle fa fa-line-chart"></i>
                      <div className="text">
                        <a href="service-single.html"><h4>Digital Analytics</h4></a>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                      </div>
                      <i className="wm i-circle fa fa-line-chart"></i>
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <a className="btn-custom" href="#">More Features</a>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-banner" className="no-top" style={{ backgroundImage: 'url(images/background/3.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight" data-wow-delay="0s">
                    <img className="relative img-fluid" src="images/misc/5.png" alt="" />
                  </div>

                  <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay="0s">
                    <h2>
                      Data security with<br />
                      <span className="id-color">256-bit</span> encryption
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .
                    </p>
                    <div className="spacer-half"></div>
                    <a className="btn-custom" href="#">Get Started</a>
                  </div>

                  <div className="spacer-double"></div>

                  <div className="col-md-12 wow fadeInUp" data-wow-delay="0s">
                    <div id="owl-logo" className="logo-carousel owl-carousel owl-theme">
                      <img src="images/logo-clients/1.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/2.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/3.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/4.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/5.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/6.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/7.png" className="img-fluid" alt="" />
                      <img src="images/logo-clients/8.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
      </>
    );
  }
}

export default Main;