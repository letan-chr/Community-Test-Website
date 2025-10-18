import React from 'react'

const About = () => {
  return (
    <div>
      {/* start about area two */}
      <div className="rts-about-area-two rts-section-gap about-two-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="about-three-thumbnail-left">
                <img src="assets/images/about/main/05.jpg" alt="Business-about" />
                <div className="about-sm-thumb">
                  <img src="assets/images/about/main/about-01-sm.jpg" alt="business_about-sm" />
                </div>
                <a href="#" className="vedio-icone">
                  <span id="play-video" className="video-play-button">
                    <img src="assets/images/about/shape/play-btn.png" alt="Play btn" />
                    <span></span>
                  </span>
                  <div id="video-overlay" className="video-overlay">
                    <span className="video-overlay-close">×</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-7 pl--50 pl_md--15 pl_sm--15">
              <div className="about-right-three">
                <div className="title-area-about-three">
                  <span className="sub">Easy Business Solution</span>
                  <h2 className="title">
                    The Most Leading
                    <span>Solution <span>For You</span></span>
                  </h2>
                </div>
                <div className="inner-about-three">
                  <p className="disc">
                    Commodo dignissim nibh tristique urna arcu sagittis nec sapien velit, praesent at
                    dictumst sollicitudin cursus tellus senectus aliquet vivamus curabitur, sociis libero
                    lacus cubilia leo porta penatibus varius arcu sagittis nec sapien velit
                  </p>
                  {/* start */}
                  <div className="row">
                    {/* start */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="solution-wrapper">
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Leading Business Solution</p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Business is the best plan</p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Services we provide </p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>How to improve business</p>
                        </div>
                        {/* single business solution */}
                      </div>
                    </div>
                    {/* end */}
                    {/* start */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="solution-wrapper-right">
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Leading Business Solution</p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Business is the best plan</p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>Services we provide </p>
                        </div>
                        {/* single business solution */}
                        {/* single business solution */}
                        <div className="single-business-solution">
                          <i className="far fa-check"></i>
                          <p>How to improve business</p>
                        </div>
                        {/* single business solution */}
                      </div>
                    </div>
                    {/* end */}
                  </div>
                </div>
                {/*usrer aresa start */}
                <div className="row">
                  <div className="col-l2">
                    <div className="rts-user-three-wrapper">
                      <div className="user-wrapper">
                        <a href="#"><img src="assets/images/about/main/user/01.png" alt="Business_User" /></a>
                        <a href="#"><img src="assets/images/about/main/user/02.png" alt="Business_User" /></a>
                        <a href="#"><img src="assets/images/about/main/user/03.png" alt="Business_User" /></a>
                      </div>
                      <div className="reviews">
                        <h5 className="title">1500+</h5>
                        <span>Active Reviews</span>
                      </div>
                      <a href="#" className="rts-btn btn-primary-3 color-h-black ml--35">Get Started</a>
                    </div>
                  </div>
                </div>
                {/*usrer aresa end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about area two */}
    </div>
  )
}

export default About