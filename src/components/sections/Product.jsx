import React from 'react'

const Product = () => {
  return (
    <div>
      <div className="rts-gallery-area rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="rts-title-area gallery text-start six pl_sm--20">
              <p className="pre-title">
                Popular Projects
              </p>
              <h2 className="title">Our Completed Projects</h2>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-12">
              <div className="swiper mygallery mySwipers">
                <div className="swiper-wrapper gallery">
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div className="thumbnail-gallery">
                          <img src="assets/images/gallery/gallery-01.jpg" alt="business-images" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img src="assets/images/gallery/icon/01.svg" alt="Business-gallery" />
                          </div>
                          <a href="#">
                            <h4 className="title">Pro Business Solution</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">Ornare etiam laoreet dictumst nisl quisque scelerisque cras
                            ut porta interdum purus mattis iaculis litora turpis torquent posuere.
                          </p>
                          <a className="rts-btn btn-primary six" href="project-details.html">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7">
                        <div className="thumbnail-gallery">
                          <img src="assets/images/gallery/gallery-02.jpg" alt="business-images" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img src="assets/images/gallery/icon/01.svg" alt="Business-gallery" />
                          </div>
                          <a href="#">
                            <h4 className="title">Finbiz Pro Business</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">In the literal sense, the term "Business" means the state of
                            being busy. But it is a very wide connotation of business.</p>
                          <a className="rts-btn btn-primary six" href="project-details.html">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7">
                        <div className="thumbnail-gallery">
                          <img src="assets/images/gallery/gallery-03.jpg" alt="business-images" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img src="assets/images/gallery/icon/01.svg" alt="Business-gallery" />
                          </div>
                          <a href="#">
                            <h4 className="title">Pro Solution Business</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">But a very wide of business because it
                            covers every human activity. Business is really concerned with the
                            production.
                          </p>
                          <a className="rts-btn btn-primary six" href="project-details.html">View Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next six"></div>
                <div className="swiper-button-prev six"></div>
                <div className="swiper-pagination six"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product