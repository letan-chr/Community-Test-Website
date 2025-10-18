import React from 'react'

const Products = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Portfolio</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index.html">Home</a>
                <span> / </span>
                <a href="#" className="active">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="rts-project-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-button-area-one">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Projects</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Business</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Solution</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tabs" data-bs-toggle="tab" data-bs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Marketing</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tabrts" data-bs-toggle="tab" data-bs-target="#contactrts" type="button" role="tab" aria-controls="contactrts" aria-selected="false">Marketing</button>
                  </li>
                </ul>
              </div>
              <div className="tab-content-area mt--50 mt_sm--30">
                <div className="tab-content" id="myTabContent">
                  
                  {/* All Projects Tab */}
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row g-5">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="rts-product-one">
                            <div className="thumbnail-area">
                              <img src={`/assets/images/product/0${item}.jpg`} alt="Business Finbiz" />
                              <a className="rts-btn btn-primary rounded" href="project-details.html">
                                <i className="far fa-arrow-right"></i>
                              </a>
                            </div>
                            <div className="product-contact-wrapper">
                              <span>Business Solution</span>
                              <a href="project-details.html">
                                <h5 className="title">Business Growth Check</h5>
                              </a>
                              <p className="disc">
                                Ultricies nequenulla eros sapien cubilia nostra viverra integer
                                ornare prointa
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Tab */}
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row g-5">
                      {[6, 5, 4, 3, 2, 1].map((item) => (
                        <div key={item} className={`col-xl-4 col-lg-4 col-md-6 ${item <= 3 ? 'col-sm-12' : 'col-sm-6'} col-12`}>
                          <div className="rts-product-one">
                            <div className="thumbnail-area">
                              <img src={`/assets/images/product/0${item}.jpg`} alt="Business Finbiz" />
                              <a className="rts-btn btn-primary rounded" href="project-details.html">
                                <i className="far fa-arrow-right"></i>
                              </a>
                            </div>
                            <div className="product-contact-wrapper">
                              <span>Business Solution</span>
                              <a href="project-details.html">
                                <h5 className="title">Business Growth Check</h5>
                              </a>
                              <p className="disc">
                                Ultricies nequenulla eros sapien cubilia nostra viverra integer
                                ornare prointa
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution Tab */}
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="row g-5">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="rts-product-one">
                            <div className="thumbnail-area">
                              <img src={`/assets/images/product/0${item}.jpg`} alt="Business Finbiz" />
                              <a className="rts-btn btn-primary rounded" href="project-details.html">
                                <i className="far fa-arrow-right"></i>
                              </a>
                            </div>
                            <div className="product-contact-wrapper">
                              <span>Business Solution</span>
                              <a href="project-details.html">
                                <h5 className="title">Business Growth Check</h5>
                              </a>
                              <p className="disc">
                                Ultricies nequenulla eros sapien cubilia nostra viverra integer
                                ornare prointa
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Marketing Tab 1 */}
                  <div className="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contact-tabs">
                    <div className="row g-5">
                      {[6, 5, 4, 3, 2, 1].map((item) => (
                        <div key={item} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="rts-product-one">
                            <div className="thumbnail-area">
                              <img src={`/assets/images/product/0${item}.jpg`} alt="Business Finbiz" />
                              <a className="rts-btn btn-primary rounded" href="project-details.html">
                                <i className="far fa-arrow-right"></i>
                              </a>
                            </div>
                            <div className="product-contact-wrapper">
                              <span>Business Solution</span>
                              <a href="project-details.html">
                                <h5 className="title">Business Growth Check</h5>
                              </a>
                              <p className="disc">
                                Ultricies nequenulla eros sapien cubilia nostra viverra integer
                                ornare prointa
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Marketing Tab 2 */}
                  <div className="tab-pane fade" id="contactrts" role="tabpanel" aria-labelledby="contact-tabrts">
                    <div className="row g-5">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="rts-product-one">
                            <div className="thumbnail-area">
                              <img src={`/assets/images/product/0${item}.jpg`} alt="Business Finbiz" />
                              <a className="rts-btn btn-primary rounded" href="project-details.html">
                                <i className="far fa-arrow-right"></i>
                              </a>
                            </div>
                            <div className="product-contact-wrapper">
                              <span>Business Solution</span>
                              <a href="project-details.html">
                                <h5 className="title">Business Growth Check</h5>
                              </a>
                              <p className="disc">
                                Ultricies nequenulla eros sapien cubilia nostra viverra integer
                                ornare prointa
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products