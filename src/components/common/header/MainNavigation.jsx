import React from 'react';

const MainNavigation = () => {
  return (
    <div className="row main-header main-header-three">
      <div className="col-lg-3 col-md-4 col-sm-5 col-5">
        <a href="index-three.html" className="thumbnail-logo">
          <img src="/assets/images/logo/logo-3.svg" alt="Logo_three" />
        </a>
      </div>
      <div className="col-lg-6 d-none d-xl-block">
        <div className="text-center d-flex justify-content-center">
          <nav className="nav-main mainmenu-nav d-none d-xl-block">
            <ul className="mainmenu">
              <li className="has-droupdown">
                <a className="nav-link" href="#">Home</a>
                <ul className="submenu menu-link1">
                  <li className="menu-item">
                    <a className="tag" href="#">Multipages</a>
                    <ul>
                      <li><a href="index.html">Main Home</a></li>
                      <li><a href="index-two.html">Consulting Home</a></li>
                      <li><a href="index-three.html">Corporate Home</a></li>
                      <li><a href="index-four.html">Insurance Home</a></li>
                      <li><a href="index-five.html">Marketing Home</a></li>
                      <li><a href="index-six.html">Home finance</a></li>
                      <li><a href="index-seven.html">Human Resources</a></li>
                      <li><a href="index-eight.html">IT Solutions</a></li>
                      <li><a href="index-nine.html">Modern Agency</a></li>
                      <li><a href="index-ten.html">Startup Agency</a></li>
                      <li><a href="index-eleven.html">Branding Agency</a></li>
                      <li><a href="index-twelve.html">Business Agency</a></li>
                      <li><a href="index-thirteen.html">Business Management</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a className="tag" href="#">Onepages</a>
                    <ul>
                      <li><a href="onepage-one.html">Main Home</a></li>
                      <li><a href="onepage-two.html">Consulting Home</a></li>
                      <li><a href="onepage-three.html">Corporate Home</a></li>
                      <li><a href="onepage-four.html">Insurance Home</a></li>
                      <li><a href="onepage-five.html">Marketing Home</a></li>
                      <li><a href="onepage-six.html">Finance Home</a></li>
                      <li><a href="onepage-seven.html">Human resource</a></li>
                      <li><a href="onepage-eight.html">IT Solutions</a></li>
                      <li><a href="onepage-nine.html">Modern Agency</a></li>
                      <li><a href="onepage-ten.html">Startup Agency</a></li>
                      <li><a href="onepage-eleven.html">Branding Agency</a></li>
                      <li><a href="onepage-twelve.html">Business Agency</a></li>
                      <li><a href="index-thirteen.html">Business Management</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              {/* Services Menu */}
              <li className="has-droupdown">
                <a className="nav-link" href="#">Services</a>
                <ul className="submenu menu-link3">
                  <li className="sub-droupdown">
                    <a className="sub-menu-link" href="#">Our Service</a>
                    <ul className="submenu third-lvl">
                      <li><a href="our-service.html">Service 1</a></li>
                      <li><a href="service-2.html">Service 2</a></li>
                      <li><a href="service-3.html">Service 3</a></li>
                    </ul>
                  </li>
                  <li><a href="service-details.html">Service Details</a></li>
                </ul>
              </li>
              
              {/* Pages Menu */}
              <li className="has-droupdown">
                <a className="nav-link" href="#">Pages</a>
                <ul className="submenu menu-link">
                  <li className="menu-item">
                    <a className="tag" href="#">Pages</a>
                    <ul>
                      <li><a href="appoinment.html">Appoinment</a></li>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="price-plan.html">Price Plans</a></li>
                      <li><a href="our-service.html">Our Services</a></li>
                      <li><a href="testimonial-style-1.html">Testimonial</a></li>
                      <li><a href="404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a className="tag" href="#">Portfolio</a>
                    <ul>
                      <li><a href="project.html">Portfolio Style 1</a></li>
                      <li><a href="portfolio-style-2.html">Portfolio Style 2</a></li>
                      <li><a href="portfolio-style-3.html">Portfolio Style 3</a></li>
                      <li><a href="portfolio-style-4.html">Portfolio Style 4</a></li>
                      <li><a href="portfolio-style-5.html">Portfolio Style 5</a></li>
                      <li><a href="project-details.html">Portfolio Details</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a className="tag" href="#">Our Teams</a>
                    <ul>
                      <li><a href="team.html">Team Style 1</a></li>
                      <li><a href="team-style-2.html">Team Style 2</a></li>
                      <li><a href="team-style-3.html">Team Style 3</a></li>
                      <li><a href="team-style-4.html">Team Style 4</a></li>
                      <li><a href="team-style-5.html">Team Style 5</a></li>
                      <li><a href="team-details.html">Team Details</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              {/* Blog Menu */}
              <li className="has-droupdown">
                <a className="nav-link" href="#">Blog</a>
                <ul className="submenu">
                  <li><a href="blog-list.html">Blog List</a></li>
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              
              {/* Elements Menu */}
              <li className="has-droupdown">
                <a className="nav-link" href="#">Elements</a>
                <ul className="submenu menu-link2">
                  <li className="menu-item">
                    <ul>
                      <li><a href="accordion.html">Accordion</a></li>
                      <li><a href="address-box.html">Address Box</a></li>
                      <li><a href="button.html">Button</a></li>
                      <li><a href="blog-grid.html">Blog Grid</a></li>
                      <li><a href="blog-slider.html">Blog Slider</a></li>
                      <li><a href="blog-quote.html">Blog Quote</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <ul>
                      <li><a href="heading.html">Heading</a></li>
                      <li><a href="cta.html">Call To Action</a></li>
                      <li><a href="contact-form.html">Contact Form</a></li>
                      <li><a href="counter.html">Counter Up</a></li>
                      <li><a href="brand.html">Brand Logo</a></li>
                      <li><a href="video.html">Video Addon</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <ul>
                      <li><a href="pricing.html">Pricing Table</a></li>
                      <li><a href="typography.html">Typography</a></li>
                      <li><a href="tab-addon.html">Tab Addon</a></li>
                      <li><a href="progress-bar.html">Progress Bar</a></li>
                      <li><a href="testimonial.html">Testimonial</a></li>
                      <li><a href="working-process.html">Working Process</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li><a className="nav-item" href="contactus.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-xl-3 col-lg-9 col-md-8 col-sm-7 col-7">
        <div className="right justify-content-end">
          <a href="#" className="rts-btn btn-primary-3">Book a Meeting</a>
          <button id="menu-btn" className="menu rts-btn btn-primary-3-menu ml--20">
            <img className="menu-dark" src="/assets/images/icon/menu.png" alt="Menu-icon" />
            <img className="menu-light" src="/assets/images/icon/menu-light.png" alt="Menu-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;