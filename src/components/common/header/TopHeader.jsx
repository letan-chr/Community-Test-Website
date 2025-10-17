import React from 'react';

const HeaderTop = () => {
  return (
    <div className="row header-top-three">
      <div className="col-lg-6">
        <p className="top-left">
          Are you ready to grow up your business? 
          <a href="contactus.html">
            Contact Us <i className="far fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <div className="col-lg-6 right-h-three">
        <div className="header-top-right">
          <div className="single-right email">
            <i className="fas fa-envelope"></i>
            <a href="#">info@example.com</a>
          </div>
          <div className="single-right call">
            <i className="far fa-phone-volume"></i>
            <span>Hotline:</span>
            <a href="#">+210-9856988</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;