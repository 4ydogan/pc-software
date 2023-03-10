import React, { Component } from 'react';

class Pricing extends Component {
  render() {
    return (
      <>
        <div class="no-bottom no-top" id="content">
          <div id="top"></div>

          <section id="subheader" style={{ backgroundImage: 'url(images/background/5.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div class="center-y relative text-center" data-scroll-speed="4">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 offset-md-2">
                    <form action='blank.php' class="row" id='form_subscribe' method="post" name="myForm">
                      <div class="col-md-12 text-center">
                        <h1>Pricing Plan</h1>
                        <p>Awsome Page Teaser Here</p>
                      </div>
                      <div class="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="no-top" style={{ backgroundImage: 'url(images/background/6.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <div class="switch-set">
                    <div>Monthly</div>
                    <div><input id="sw-1" class="switch" type="checkbox" /></div>
                    <div>Yearly</div>
                    <div class="spacer-20"></div>
                  </div>
                </div>
              </div>
              <div class="item pricing">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="pricing-s1 mb30">
                        <div class="top">
                          <h2>Basic</h2>
                          <p class="plan-tagline">Best for personal</p>
                        </div>
                        <div class="mid text-light bg-color">
                          <p class="price">
                            <span class="currency">$</span>
                            <span class="m opt-1">5.59</span>
                            <span class="y opt-2">3.46</span>
                            <span class="month">p/mo</span>
                          </p>
                        </div>

                        <div class="bottom">
                          <ul>
                            <li><i class="fa fa-check"></i>1x Processing Power</li>
                            <li><i class="fa fa-check"></i>1 Website</li>
                            <li><i class="fa fa-check"></i>1GB Disk Space</li>
                            <li><i class="fa fa-check"></i>Easy Website Builder</li>
                            <li><i class="fa fa-check"></i>99.9% Uptime Guarantee</li>
                            <li><i class="fa fa-check"></i>24/7 Customer Support</li>
                          </ul>
                        </div>

                        <div class="action">
                          <a href="" class="btn-custom">Sign Up Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="pricing-s1 mb30">
                        <div class="top">
                          <h2>Premium</h2>
                          <p class="plan-tagline">Best for small group</p>
                        </div>
                        <div class="mid text-light bg-color-2">
                          <p class="price">
                            <span class="currency">$</span>
                            <span class="m opt-1">9.59</span>
                            <span class="y opt-2">7.46</span>
                            <span class="month">p/mo</span>
                          </p>
                        </div>
                        <div class="bottom">
                          <ul>
                            <li><i class="fa fa-check"></i>6x Processing Power</li>
                            <li><i class="fa fa-check"></i>Unlimited Website</li>
                            <li><i class="fa fa-check"></i>100GB Disk Space</li>
                            <li><i class="fa fa-check"></i>Easy Website Builder</li>
                            <li><i class="fa fa-check"></i>99.9% Uptime Guarantee</li>
                            <li><i class="fa fa-check"></i>24/7 Customer Support</li>
                          </ul>
                        </div>

                        <div class="action">
                          <a href="" class="btn-custom">Sign Up Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="pricing-s1 mb30">
                        <div class="top">
                          <h2>Business</h2>
                          <p class="plan-tagline">Best for organization</p>
                        </div>
                        <div class="mid text-light bg-color-3">
                          <p class="price">
                            <span class="currency">$</span>
                            <span class="m opt-1">24.99</span>
                            <span class="y opt-2">16.49</span>
                            <span class="month">p/mo</span>
                          </p>
                        </div>
                        <div class="bottom">
                          <ul>
                            <li><i class="fa fa-check"></i>6x Processing Power</li>
                            <li><i class="fa fa-check"></i>Unlimited Website</li>
                            <li><i class="fa fa-check"></i>100GB Disk Space</li>
                            <li><i class="fa fa-check"></i>Easy Website Builder</li>
                            <li><i class="fa fa-check"></i>99.9% Uptime Guarantee</li>
                            <li><i class="fa fa-check"></i>24/7 Customer Support</li>
                          </ul>
                        </div>

                        <div class="action">
                          <a href="" class="btn-custom">Sign Up Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="section-fun-facts" class="pt40 pb40 text-light bg-color-3">
            <div class="container">

              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <div class="de_count">
                    <h3 class="timer" data-to="15425" data-speed="3000">0</h3>
                    <span>Website Powered</span>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6">
                  <div class="de_count">
                    <h3 class="timer" data-to="8745" data-speed="3000">0</h3>
                    <span>Clients Supported</span>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6" data-wow-delay=".5s">
                  <div class="de_count">
                    <h3 class="timer" data-to="235" data-speed="3000">0</h3>
                    <span>Awards Winning</span>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6">
                  <div class="de_count">
                    <h3 class="timer" data-to="15" data-speed="3000">0</h3>
                    <span>Years Experience</span>
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

export default Pricing;