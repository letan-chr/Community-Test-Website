import React from 'react'

const ServiceDetails = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Service Details</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index.html">Home</a>
                <span> / </span>
                <a href="#" className="active">Service Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Area */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            {/* Main Content Area */}
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* Service Details Step 1 */}
              <div className="service-detials-step-1">
                <div className="thumbnail">
                  <img src="/assets/images/service/01.jpg" alt="Business area" />
                </div>
                <h4 className="title">Business Growth Management</h4>
                <p className="disc">
                  Continually myocardinate holistic mindshare with client-based web services. Assertively
                  e-enable catalysts for change before tested markets. Phosfluorescently maintain wireless
                  scenarios after intermandated applications. Conveniently predominate revolutionary quality
                  vectors through future-proof manufactured products. Enthusiastically transform distinctive
                  collaboration.
                </p>
                <p className="disc">
                  Intrinsicly coordinate multifunctional functionalities reliable potentialities. Objectively
                  envisioneer high in convergence through collaborative networks. Interactively generate B2C
                  e-tailers for business data restore fully researched relationships through resource
                  maximizing results.
                </p>
                
                {/* Service Cards */}
                <div className="row g-5 mt--30 mb--40">
                  {[
                    { icon: "09.svg", title: "Instant Business Growth", desc: "Maintain wireless scenarios after sure quality vectors future" },
                    { icon: "10.svg", title: "24/7 Quality Service", desc: "Maintain wireless scenarios after sure quality vectors future" },
                    { icon: "11.svg", title: "Easy Customer Service", desc: "Maintain wireless scenarios after sure quality vectors future" },
                    { icon: "12.svg", title: "Quality Cost Service", desc: "Maintain wireless scenarios after sure quality vectors future" }
                  ].map((card, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="service-details-card">
                        <div className="thumbnail">
                          <img src={`/assets/images/service/icon/${card.icon}`} alt={card.title} className="icon" />
                        </div>
                        <div className="details">
                          <h6 className="title">{card.title}</h6>
                          <p className="disc">{card.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="disc">
                  Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently
                  unique predominate revolutionary quality vectors through future-proof manufactured products.
                  Objectively envisioneer high solution convergence through collaborative networks.
                  Interactively generate B2C e-tailers for business data restore fully researched
                  relationships through resource maximizing results.
                </p>
              </div>

              {/* Service Details Step 2 */}
              <div className="service-detials-step-2 mt--40">
                <h4 className="title">3 Simple Steps to Process</h4>
                <p className="disc mb--25">
                  Assertively e-enable catalysts for change before fully tested markets. Phosfluorescently is
                  maintain solve wireless scenarios after intermandated applications. Conveniently predominate
                  business revolutionary quality vectors through future-proof manufactured products.
                  Enthusiastically transform distinctive collaboration.
                </p>
                <p className="disc">
                  Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently
                  predominate misslat revolutionary quality vectors through future-proof manufactured
                  products.
                </p>
                
                {/* Steps Area */}
                <div className="row mb--40 g-5 mb_md--20 mb_sm--20">
                  {[
                    { step: "01", title: "STEP ONE", desc: "Tactical services through market web services" },
                    { step: "02", title: "STEP TWO", desc: "Tactical services through market web services" },
                    { step: "03", title: "STEP THREE", desc: "Tactical services through market web services" }
                  ].map((step, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="single-service-step text-center">
                        <p className="step">{step.step}</p>
                        <h6 className="title">{step.title}</h6>
                        <p className="disc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="disc">
                  Conveniently predominate revolutionary quality vectors through future-proof manufactured
                  products. Objectively envisioneer high in convergence through collaborative networks.
                  Interactively generate B2C tailers for business data restore fully researched relationships
                  through
                </p>
              </div>

              {/* Service Details Step 3 */}
              <div className="service-detials-step-3 mt--70 mt_md--50">
                <div className="row g-5 align-items-center">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="thumbnail sm-thumb-service">
                      <img src="/assets/images/service/sm-01.jpg" alt="Service" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb_md--20 mb_sm--20">
                    <h4 className="title">Customer Benefits</h4>
                    <p className="disc">
                      Catalysts for change before fully tested markets are maintain wireless
                      scenarios after intermandated applications predominate revolutionary.
                    </p>
                    {[
                      "We use the latest diagnostic equipment",
                      "We are a member of Professional Service",
                      "Automotive service our clients receive"
                    ].map((benefit, index) => (
                      <div key={index} className="single-banifits">
                        <i className="far fa-check-circle"></i>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
              {/* Categories Widget */}
              <div className="rts-single-wized Categories service">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  {[
                    "Business Solution",
                    "Strategy Growth", 
                    "Finance Solution",
                    "Investment Policy",
                    "Tax Management"
                  ].map((category, index) => (
                    <ul key={index} className="single-categories">
                      <li>
                        <a href="#">
                          {category} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* Download Widget */}
              <div className="rts-single-wized download service">
                <div className="wized-header">
                  <h5 className="title">Download</h5>
                </div>
                <div className="wized-body">
                  {[
                    { icon: "07.svg", title: "Our Brochures", label: "Download" },
                    { icon: "08.svg", title: "Company Details", label: "Download" }
                  ].map((item, index) => (
                    <div key={index} className="single-download-area">
                      <img src={`/assets/images/service/icon/${item.icon}`} alt="Business download" />
                      <div className="mid">
                        <h6 className="title">{item.title}</h6>
                        <span>{item.label}</span>
                      </div>
                      <a className="rts-btn btn-primary" href="#">
                        <i className="fal fa-arrow-right"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Widget */}
              <div className="rts-single-wized contact service">
                <div className="wized-header">
                  <a href="#"><img src="/assets/images/logo/logo-2.svg" alt="Business logo" /></a>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Help You</h5>
                  <a className="rts-btn btn-primary" href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails