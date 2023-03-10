import React, { Component } from 'react';

class Contact extends Component {
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
                        <h1>Contact Us</h1>
                        <p>Awsome Page Teaser Here</p>
                      </div>
                      <div class="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="no-top" style={{ backgroundImage: 'url(images/background/3.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div class="container">
              <div class="row">

                <div class="col-lg-8 offset-md-2 mb-sm-30">
                  <h3>Do you have any question?</h3>

                  <form name="contactForm" id="contact_form" class="form-border" method="post"
                    action="email.php">
                    <div class="field-set">
                      <input type="text" name="name" id="name" class="form-control"
                        placeholder="Your Name" />
                    </div>

                    <div class="field-set">
                      <input type="text" name="email" id="email" class="form-control"
                        placeholder="Your Email" />
                    </div>

                    <div class="field-set">
                      <input type="text" name="phone" id="phone" class="form-control"
                        placeholder="Your Phone" />
                    </div>

                    <div class="field-set">
                      <textarea name="message" id="message" class="form-control"
                        placeholder="Your Message"></textarea>
                    </div>

                    <div class="spacer-half"></div>

                    <div id="submit">
                      <input type="submit" id="send_message" value="Submit Form" class="btn btn-custom" />
                    </div>
                    <div id="mail_success" class="success">Your message has been sent successfully.</div>
                    <div id="mail_fail" class="error">Sorry, error occured this time sending your message.
                    </div>
                  </form>
                </div>

                <div class="spacer-double"></div>

                <div class="col-lg-8 offset-md-2 mb30">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="padding40 bg-color-2 text-light box-rounded">
                        <h3>US Office</h3>
                        <address class="s1">
                          <span><i class="fa fa-map-marker fa-lg"></i>08 W 36th St, New York, NY
                            10001</span>
                          <span><i class="fa fa-phone fa-lg"></i>+1 333 9296</span>
                          <span><i class="fa fa-envelope-o fa-lg"></i><a
                            href="mailto:contact@example.com">contact@example.com</a></span>
                          <span><i class="fa fa-file-pdf-o fa-lg"></i><a href="#">Download
                            Brochure</a></span>
                        </address>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="padding40 bg-color-3 text-light box-rounded">
                        <h3>AU Office</h3>
                        <address class="s1">
                          <span><i class="fa fa-map-marker fa-lg"></i>100 Mainstreet Center,
                            Sydney</span>
                          <span><i class="fa fa-phone fa-lg"></i>+61 333 9296</span>
                          <span><i class="fa fa-envelope-o fa-lg"></i><a
                            href="mailto:contact@example.com">contact@example.com</a></span>
                          <span><i class="fa fa-file-pdf-o fa-lg"></i><a href="/">Download
                            Brochure</a></span>
                        </address>
                      </div>
                    </div>
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

export default Contact;