import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <>
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section id="subheader" style={{ backgroundImage: 'url(images/background/5.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div className="center-y relative text-center" data-scroll-speed="4">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <form action='blank.php' className="row" id='form_subscribe' method="post" name="myForm">
                      <div className="col text-center">
                        <div className="spacer-single"></div>
                        <h1>About Us</h1>
                        <p>Awsome Page Teaser Here</p>
                      </div>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="no-top" style={{ backgroundImage: 'url(images/background/6.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5 ">
                  <img src="images/misc/1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 offset-md-1">
                  <h3>What makes us different?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
              </div>

              <div className="spacer-double"></div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <h3>Team Of Awesome</h3>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                  <div className="f-profile text-center">
                    <div className="fp-wrap gray">
                      <div className="fpw-overlay">
                        <div className="fpwo-wrap">
                          <div className="fpwow-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="fpw-overlay-btm"></div>
                      <img src="images/team/1.jpg" className="fp-image img-fluid" alt="" />
                    </div>

                    <h4>Fynley Wilkinson</h4>
                    Chief Creative Officer
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                  <div className="f-profile text-center">
                    <div className="fp-wrap gray">
                      <div className="fpw-overlay">
                        <div className="fpwo-wrap">
                          <div className="fpwow-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="fpw-overlay-btm"></div>
                      <img src="images/team/2.jpg" className="fp-image img-fluid" alt="" />
                    </div>

                    <h4>Myra Welsh</h4>
                    Chief Technology Officer
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                  <div className="f-profile text-center">
                    <div className="fp-wrap gray">
                      <div className="fpw-overlay">
                        <div className="fpwo-wrap">
                          <div className="fpwow-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="fpw-overlay-btm"></div>
                      <img src="images/team/3.jpg" className="fp-image img-fluid" alt="" />
                    </div>

                    <h4>Aysha Shepard</h4>
                    Chief Executive Officer
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                  <div className="f-profile text-center">
                    <div className="fp-wrap gray">
                      <div className="fpw-overlay">
                        <div className="fpwo-wrap">
                          <div className="fpwow-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="fpw-overlay-btm"></div>
                      <img src="images/team/4.jpg" className="fp-image img-fluid" alt="" />
                    </div>

                    <h4>Robyn Peel</h4>
                    Director of Finance
                  </div>
                </div>


              </div>

              <div className="spacer-double"></div>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3>What makes us different?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>

                <div className="col-md-5  offset-md-1">
                  <img src="images/misc/5.png" className="img-fluid" alt="" />
                </div>
              </div>

            </div>

          </section>

          <section className="pt60 pb60 bg-color-2 text-light">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8 mb-sm-30 text-lg-left text-sm-center">
                  <h3 className="no-bottom">Awesomeness begin here. Are you ready?</h3>
                </div>

                <div className="col-md-4 text-lg-right text-sm-center">
                  <a href="#" className="btn-custom capsule med">Let's do it!</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </>
    );
  }
}

export default About;