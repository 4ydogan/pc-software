import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <>
        <div class="no-bottom no-top" id="content">
          <div id="top"></div>

          <section id="subheader" style={{ backgroundImage: 'url(images/background/5.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: '80%', backgroundPositionY: '80%' }}>
            <div class="center-y relative text-center" data-scroll-speed="4">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 offset-md-2">
                    <form action='blank.php' class="row" id='form_subscribe' method="post" name="myForm">
                      <div class="col-md-12 text-center">
                        <h1>News</h1>
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
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/1.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">Better User Interface</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/2.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">Experts Web Design Tips</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/3.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">Importance Of Web Design</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/4.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">Avoid These Erros In UI Design</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/5.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">Make Mobile Website Faster</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb30">
                  <div class="bloglist item">
                    <div class="post-content">
                      <div class="post-image">
                        <img alt="" src="images/news/6.jpg" />
                        <div class="post-info">
                          <div class="inner">
                            <span class="post-date">10 hours ago</span> <span class="post-author">Oscar Helman</span>
                          </div>
                        </div>
                      </div>
                      <div class="post-text">
                        <h4><a href="news-single.html">How Sell Digital Product</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default News;