import React from 'react'

const Services = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Our Services</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index.html">Home</a>
                <span> / </span>
                <a href="#" className="active">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
        <div className="container">
          <div className="row g-5 service padding-controler">
            {/* Service Items */}
            {[
              {
                id: 1,
                image: "02.jpg",
                title: "Strategy Growth",
                thumbnailClass: "",
                pbClass: "pb--140 pb_md--100"
              },
              {
                id: 2,
                image: "03.jpg",
                title: "Grow Business",
                thumbnailClass: "two",
                pbClass: "pb--140 pb_md--100"
              },
              {
                id: 3,
                image: "04.jpg",
                title: "Proudly Speech",
                thumbnailClass: "three",
                pbClass: "pb--140 pb_md--100"
              },
              {
                id: 4,
                image: "02.jpg",
                title: "Model Building",
                thumbnailClass: "",
                pbClass: "pb--140 pb_md--100"
              },
              {
                id: 5,
                image: "03.jpg",
                title: "Solution Model",
                thumbnailClass: "two",
                pbClass: "pb--140 pb_md--60"
              },
              {
                id: 6,
                image: "04.jpg",
                title: "Finbiz Solution",
                thumbnailClass: "three",
                pbClass: "pb--140 pb_md--60 pb_sm--60"
              }
            ].map((service) => (
              <div key={service.id} className={`col-xl-4 col-md-6 col-sm-12 col-12 ${service.pbClass}`}>
                <div className="service-two-inner">
                  <a href="service-details.html" className={`thumbnail ${service.thumbnailClass}`}>
                    <img src={`/assets/images/service/${service.image}`} alt="Business service" />
                  </a>
                  <div className="body-content">
                    <div className="hidden-area">
                      <h5 className="title">{service.title}</h5>
                      <p className="dsic">
                        Porta sagittis diam imperdiet eu, tempus nisi aenean vehicula torquent dis mattis nullam
                        bibendum morbi laoreet lobortis id
                      </p>
                      <a className="rts-read-more-two color-primary" href="service-details.html">
                        Read More<i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="rts-accordion-area service rts-section-gap">
        <div className="accordion-service-bg bg_image ptb--120 ptb_md--80 ptb_sm--60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="accordion-service-inner">
                  <div className="title-area-start">
                    <span className="sub color-primary">JUST A CONSULTANCY</span>
                    <h2 className="title">We know how to manage business globally</h2>
                  </div>
                  <div className="accordion-area">
                    <div className="accordion" id="accordionExample">
                      
                      {/* Accordion Item 1 */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button 
                            className="accordion-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                          >
                            Making Easy Business Growth
                          </button>
                        </h2>
                        <div 
                          id="collapseOne" 
                          className="accordion-collapse collapse show" 
                          aria-labelledby="headingOne" 
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item 2 */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                          >
                            Business Solution Model
                          </button>
                        </h2>
                        <div 
                          id="collapseTwo" 
                          className="accordion-collapse collapse" 
                          aria-labelledby="headingTwo" 
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item 3 */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                          >
                            Finbiz Company Solution
                          </button>
                        </h2>
                        <div 
                          id="collapseThree" 
                          className="accordion-collapse collapse" 
                          aria-labelledby="headingThree" 
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item 4 */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFour" 
                            aria-expanded="false" 
                            aria-controls="collapseFour"
                          >
                            Management Process
                          </button>
                        </h2>
                        <div 
                          id="collapseFour" 
                          className="accordion-collapse collapse" 
                          aria-labelledby="headingFour" 
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item 5 */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFive" 
                            aria-expanded="false" 
                            aria-controls="collapseFive"
                          >
                            Managing Investment
                          </button>
                        </h2>
                        <div 
                          id="collapseFive" 
                          className="accordion-collapse collapse" 
                          aria-labelledby="headingFive" 
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
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

export default Services