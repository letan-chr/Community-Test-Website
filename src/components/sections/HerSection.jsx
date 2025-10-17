import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const HerSection = () => {
  return (
    <div className="rts-banner-area banner-three">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg_banner-three bg_image rts-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-three-inner">
                    <span className="subtitle-banner">Make Your Strategy Strong</span>
                    <h1 className="title cd-headline clip is-full-width">Grow Business</h1>
                    <p className="disc">
                      Urna justo odio ultrices aliquet vitae sollicitudin gravida congue in sapien
                      eget sociosqu mollis lacus cursus per primis quis nascetur nisl risus porta
                      issues business solution service.
                    </p>
                    <div className="button-group">
                      <a href="price-plan.html" className="rts-btn btn-primary-3">Get Started</a>
                      <a href="about-us.html" className="rts-btn btn-primary-3 transparent">About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg_banner-three slide-2 bg_image rts-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-three-inner">
                    <span className="subtitle-banner">Make Your Strategy Strong</span>
                    <h1 className="title cd-headline clip is-full-width">Expert Solution</h1>
                    <p className="disc">
                      Urna justo odio ultrices aliquet vitae sollicitudin gravida congue in sapien
                      eget sociosqu mollis lacus cursus per primis quis nascetur nisl risus porta
                      issues business solution service.
                    </p>
                    <div className="button-group">
                      <a href="price-plan.html" className="rts-btn btn-primary-3">Get Started</a>
                      <a href="about-us.html" className="rts-btn btn-primary-3 transparent">About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg_banner-three slide-3 bg_image rts-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-three-inner">
                    <span className="subtitle-banner">Make Your Strategy Strong</span>
                    <h1 className="title cd-headline clip is-full-width">Modern Strategy</h1>
                    <p className="disc">
                      Urna justo odio ultrices aliquet vitae sollicitudin gravida congue in sapien
                      eget sociosqu mollis lacus cursus per primis quis nascetur nisl risus porta
                      issues business solution service.
                    </p>
                    <div className="button-group">
                      <a href="price-plan.html" className="rts-btn btn-primary-3">Get Started</a>
                      <a href="about-us.html" className="rts-btn btn-primary-3 transparent">About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HerSection;
