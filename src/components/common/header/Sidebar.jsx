import React from 'react';

const Sidebar = () => {
  return (
    <div id="side-bar" className="side-bar">
      <button className="close-icon-menu">
        <i className="far fa-times"></i>
      </button>
      
      <div className="rts-sidebar-menu-desktop">
        <a className="logo-1" href="index.html">
          <img className="logo" src="/assets/images/logo/logo-1.svg" alt="finbiz_logo" />
        </a>
        
        <div className="body d-none d-xl-block">
          <p className="disc">
            We must explain to you how all seds this mistakens idea denouncing pleasures and praising account.
          </p>
          <div className="get-in-touch">
            <div className="h6 title">Get In Touch</div>
            <div className="wrapper">
              <div className="single">
                <i className="fas fa-phone-alt"></i>
                <a href="#">+8801234566789</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="body-mobile d-block d-xl-none">
          <nav className="nav-main mainmenu-nav">
            <ul className="mainmenu">
              <li className="menu-item">
                <a className="menu-link" href="index.html">Home</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="about-us.html">About Us</a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="contactus.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;