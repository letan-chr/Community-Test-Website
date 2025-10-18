import React from 'react'

const Blogs = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Latest Posts</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index.html">Home</a>
                <span> / </span>
                <a href="#" className="active">Latest Posts</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid Area */}
      <div className="rts-blog-grid-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
              <div className="row g-5">
                {/* Blog Post 1 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/01.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Building smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/02.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Smart business grow solution for your Building.
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/03.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          More smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/04.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Best smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 5 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/05.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Solution your business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 6 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/06.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Smart business grow solution for your Company
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 7 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/07.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Latest business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 8 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/08.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Thinking smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 9 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/09.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Smart business grow solution for your building.
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 10 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/10.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Grow smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 11 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/01.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          business grow solution for you Building smart
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blog Post 12 */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <a className="thumbnail" href="blog-details.html">
                        <img src="/assets/images/blog/grid/02.jpg" alt="Business Blog" />
                      </a>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <a href="blog-details.html">
                        <h5 className="title">
                          Building smart business grow solution for you
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Area */}
              <div className="row mt--30">
                <div className="col-12">
                  <div className="text-center">
                    <div className="pagination">
                      <button className="active">01</button>
                      <button>02</button>
                      <button>03</button>
                      <button>04</button>
                      <button><i className="fal fa-angle-double-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12">
              {/* Search Widget */}
              <div className="rts-single-wized search">
                <div className="wized-header">
                  <h5 className="title">Search Here</h5>
                </div>
                <div className="wized-body">
                  <div className="rts-search-wrapper">
                    <input className="Search" type="text" placeholder="Enter Keyword" />
                    <button><i className="fal fa-search"></i></button>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="rts-single-wized Categories">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    <li><a href="#">Business Solution <i className="far fa-long-arrow-right"></i></a></li>
                  </ul>
                  <ul className="single-categories">
                    <li><a href="#">Solution Model<i className="far fa-long-arrow-right"></i></a></li>
                  </ul>
                  <ul className="single-categories">
                    <li><a href="#">Business Advantage<i className="far fa-long-arrow-right"></i></a></li>
                  </ul>
                  <ul className="single-categories">
                    <li><a href="#">Feature Product<i className="far fa-long-arrow-right"></i></a></li>
                  </ul>
                  <ul className="single-categories">
                    <li><a href="#">Category Theory<i className="far fa-long-arrow-right"></i></a></li>
                  </ul>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#"><img src="/assets/images/blog/details/recent-post/01.png" alt="Blog post" /></a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">We would love to share a similar experience</h6>
                      </a>
                    </div>
                  </div>
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#"><img src="/assets/images/blog/details/recent-post/02.png" alt="Blog post" /></a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">We would love to share a similar experience</h6>
                      </a>
                    </div>
                  </div>
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#"><img src="/assets/images/blog/details/recent-post/03.png" alt="Blog post" /></a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">We would love to share a similar experience</h6>
                      </a>
                    </div>
                  </div>
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#"><img src="/assets/images/blog/details/recent-post/04.png" alt="Blog post" /></a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">We would love to share a similar experience</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Widget */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  <div className="gallery-inner">
                    <div className="row-1 single-row">
                      <a href="#"><img src="/assets/images/blog/details/gallery/01.png" alt="Gallery" /></a>
                      <a href="#"><img src="/assets/images/blog/details/gallery/02.png" alt="Gallery" /></a>
                      <a href="#"><img src="/assets/images/blog/details/gallery/03.png" alt="Gallery" /></a>
                    </div>
                    <div className="row-2 single-row">
                      <a href="#"><img src="/assets/images/blog/details/gallery/04.png" alt="Gallery" /></a>
                      <a href="#"><img src="/assets/images/blog/details/gallery/05.png" alt="Gallery" /></a>
                      <a href="#"><img src="/assets/images/blog/details/gallery/06.png" alt="Gallery" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Widget */}
              <div className="rts-single-wized">
                <div className="wized-header">
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="wized-body">
                  <div className="tags-wrapper">
                    <a href="#">Services</a>
                    <a href="#">Business</a>
                    <a href="#">Growth</a>
                    <a href="#">Finance</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Solution</a>
                    <a href="#">Speed</a>
                    <a href="#">Strategy</a>
                    <a href="#">Technology</a>
                  </div>
                </div>
              </div>

              {/* Contact Widget */}
              <div className="rts-single-wized contact">
                <div className="wized-header">
                  <a href="index.html"><img src="/assets/images/logo/logo-2.svg" alt="Business logo" /></a>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Help You</h5>
                  <a className="rts-btn btn-primary" href="contactus.html">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs