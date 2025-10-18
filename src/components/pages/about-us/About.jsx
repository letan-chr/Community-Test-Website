import React from 'react'

const About = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">About Us</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index.html">Home</a>
                <span> / </span>
                <a href="#" className="active">About Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-v-inner">
                <div className="image-area">
                  <img className="mt--110 img-1" src="/assets/images/about/main/about-03.jpg" alt="Business image" />
                  <img className="img-over" src="/assets/images/about/main/about-04.jpg" alt="Business image" />
                  <div className="goal-button-wrapper">
                    <div className="vedio-icone">
                      <a id="play-video" className="video-play-button" href="#">
                        <span></span>
                      </a>
                      <div id="video-overlay" className="video-overlay">
                        <a className="video-overlay-close">×</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-progress-inner">
                <div className="title-area">
                  <span>JUST A CONSULTANCY</span>
                  <h2 className="title">Get Consulting For Better Business Growth</h2>
                </div>
                <div className="inner">
                  <p className="disc">
                    Dapibus curae risus rutrum curabitur nunc sociis nullam nisl, aliquet quis
                    iaculis scelerisque primis massa imperdiet, dis senectus blandit aptent nulla cubilia
                    sodales convallis tortor pellentesque nulla.
                  </p>
                  <div className="rts-progress-one-wrapper">
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Business Strategy</p>
                        <span className="persectage">70%</span>
                      </div>
                      <div className="meter cadetblue">
                        <span data-progress="70" style={{width: '0%'}}></span>
                      </div>
                    </div>
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Company Strength</p>
                        <span className="persectage">93%</span>
                      </div>
                      <div className="meter">
                        <span data-progress="93" style={{width: '0%'}}></span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="rts-btn btn-primary">Make an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Area */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container-fluid service-main about-service-width-controler">
          <div className="background-service service-three row">
            <div className="row g-5">
              <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                <p className="pre-title">Our Services</p>
                <h2 className="title">What We Provide</h2>
              </div>
              
              {/* Service Items */}
              {[
                { 
                  image: "07.jpg", 
                  icon: "13.svg", 
                  title: "Business Consultancy", 
                  desc: "Aenean augue venenatis est porttitor fames aptent lobortis nam potenti"
                },
                { 
                  image: "08.jpg", 
                  icon: "14.svg", 
                  title: "Business Appointment", 
                  desc: "Aenean augue venenatis est porttitor fames aptent lobortis nam potenti"
                },
                { 
                  image: "09.jpg", 
                  icon: "15.svg", 
                  title: "Consultancy Foundation", 
                  desc: "Aenean augue venenatis est porttitor fames aptent lobortis nam potenti"
                }
              ].map((service, index) => (
                <div key={index} className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                  <div className="service-one-inner-four">
                    <div className="big-thumbnail-area">
                      <a href="#" className="thumbnail">
                        <img src={`/assets/images/service/${service.image}`} alt="Business service" />
                      </a>
                      <div className="content">
                        <img src={`/assets/images/service/icon/${service.icon}`} alt="Business icon" />
                        <h5 className="title">{service.title}</h5>
                        <p className="disc">{service.desc}</p>
                      </div>
                      <a href="service-details.html" className="over_link"></a>
                    </div>
                    <a href="service-details.html" className="rts-btn btn-primary">
                      Read More<i className="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title animated fadeIn">
                    Let's discuss about how we can help make your business better
                  </h3>
                </div>
                <div className="cta-right">
                  <a className="rts-btn btn-white" href="#">Lets Work Together</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="rts-team-area rts-section-gapBottom appoinment-team team-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area team text-center">
                <p className="pre-title">Professionals Team</p>
                <h2 className="title">Professionals Team</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--15 mt_sm--0">
            {/* Team Members */}
            {[
              { image: "lg-01.jpg", name: "Kevin Martin", position: "Consultant" },
              { image: "lg-02.jpg", name: "Martin Jone", position: "Manager" },
              { image: "lg-03.jpg", name: "Jone Lee", position: "CEO" }
            ].map((member, index) => (
              <div key={index} className="col-xl-4 col-md-6 col-sm-12 col-12">
                <div className="team-inner-two">
                  <a href="team-details.html" className="thumbnail">
                    <img src={`/assets/images/team/tm/${member.image}`} alt={`Team member ${member.name}`} />
                  </a>
                  <div className="acquaintance-area">
                    <div className="header">
                      <a href="team-details.html">
                        <h5 className="title">{member.name}</h5>
                      </a>
                      <span>{member.position}</span>
                    </div>
                    <div className="acquaintance-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-two-inner">
                <div className="title-area-faq">
                  <span className="sub">WHY CHOOSE US</span>
                  <h2 className="title">
                    We Are Experienced
                    <span className="sm-title">Business <span>Solution</span></span>
                  </h2>
                </div>
                <div className="faq-accordion-area">
                  <div className="accordion" id="accordionExample">
                    {[
                      { 
                        id: "One",
                        question: "What should i included my personal details?",
                        answer: "Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions"
                      },
                      { 
                        id: "Two", 
                        question: "Where i can find my business growth result?",
                        answer: "Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions"
                      },
                      { 
                        id: "Three",
                        question: "Did you get any business consultant?",
                        answer: "Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions"
                      }
                    ].map((faq, index) => (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                          <button 
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${faq.id}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${faq.id}`}
                          >
                            <span>0{index + 1}. </span> {faq.question}
                          </button>
                        </h2>
                        <div 
                          id={`collapse${faq.id}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${faq.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-faq-four">
                <img src="/assets/images/faq/02.png" alt="FAQ illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
        <div className="container">
          <div className="row">
            <div className="rts-title-area feedback team text-center">
              <p className="pre-title">Feedbacks</p>
              <h2 className="title">Customer Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--20">
            {/* Testimonials */}
            {[
              { image: "02.png", name: "David Smith", position: "Business Expert" },
              { image: "03.png", name: "David Smith", position: "Business Expert" }
            ].map((testimonial, index) => (
              <div key={index} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="testimopnial-wrapper-two">
                  <div className="test-header">
                    <div className="thumbnail">
                      <img src={`/assets/images/testimonials/${testimonial.image}`} alt={`Testimonial ${testimonial.name}`} />
                    </div>
                    <div className="name-desig">
                      <h5 className="title">{testimonial.name}</h5>
                      <span className="designation">{testimonial.position}</span>
                    </div>
                  </div>
                  <div className="test-body">
                    <p className="disc">
                      "Parallel task user friendly convergence through supply are chains type siflify reliable
                      meta provide service visionary sources unleash tactical thinking via granular
                      intellectual capital architect dynamic information value online business solution
                      services"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About