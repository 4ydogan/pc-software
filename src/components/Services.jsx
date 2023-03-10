import React, { Component } from 'react';

class Services extends Component {
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
                        <h1>Our Services</h1>
                        <p>Awsome Page Teaser Here</p>
                      </div>
                      <div class="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="no-top">
            <div class="container">
              <div class="row">

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa fa-laptop"></i>
                    <div class="text">
                      <h4>Website Design</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-laptop"></i>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa fa-paper-plane-o"></i>
                    <div class="text">
                      <h4>Email Marketing</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-paper-plane-o"></i>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa fa-line-chart"></i>
                    <div class="text">
                      <h4>Digital Analytics</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-line-chart"></i>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa fa-object-group"></i>
                    <div class="text">
                      <h4>Visual Editor</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-object-group"></i>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa fa-hdd-o"></i>
                    <div class="text">
                      <h4>Backup &amp; Security</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-hdd-o"></i>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="feature-box f-boxed style-3">
                    <i class="bg-color i-circle fa 	fa-comments-o"></i>
                    <div class="text">
                      <h4>IT Consultancy</h4>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </div>
                    <i class="wm fa fa-comments-o"></i>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section style={{ backgroundImage: 'url(images/background/7.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h2><span class="id-color">Call us</span> for further information. Bluetec customer care is here to help you <span class="id-color">anytime</span>. </h2>
                  <p class="lead">We're available for 24 hours!</p>
                </div>

                <div class="col-md-6 text-lg-center text-sm-center">
                  <div class="phone-num-big">
                    <i class="fa fa-phone id-color"></i>
                    <span class="pnb-text">
                      Call Us Now
                    </span>
                    <span class="pnb-num">
                      1 200 333 800
                    </span>
                  </div>
                  <a href="#" class="btn-custom capsule med">Contact Us</a>
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

export default Services;