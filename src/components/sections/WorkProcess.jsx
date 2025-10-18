import React from 'react'

const WorkProcess = () => {
  const workProcesses = [
    {
      id: 1,
      icon: "05.svg",
      title: "Make a Plan",
      description: "Nostra proin fusce hendrerit viverra nisl torquent.",
      innerClass: "",
      processClass: ""
    },
    {
      id: 2,
      icon: "06.svg",
      title: "Cost Calculating",
      description: "Nostra proin fusce hendrerit viverra nisl torquent.",
      innerClass: "two",
      processClass: "process-lg"
    },
    {
      id: 3,
      icon: "07.svg",
      title: "Insurance Growth",
      description: "Nostra proin fusce hendrerit viverra nisl torquent.",
      innerClass: "three",
      processClass: ""
    },
    {
      id: 4,
      icon: "08.svg",
      title: "Success Mission",
      description: "Nostra proin fusce hendrerit viverra nisl torquent.",
      innerClass: "four",
      processClass: "process-lg"
    }
  ];

  return (
    <div className="home-violet">
      <div className="working-process-area working-process-area2 rts-section-gap working-process-bg">
        <div className="container">
          <div className="row mt--40">
            <div className="title-area text-center working-process">
              <span>Working Steps</span>
              <h2 className="title">Our Basic Work Process</h2>
            </div>
          </div>
          <div className="row g-5 mt--20 align-items-center">
            {workProcesses.map((process) => (
              <div key={process.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className={`rts-working-process-1 ${process.processClass} text-center`}>
                  <div className={`inner ${process.innerClass}`}>
                    <div className="icon">
                      <img 
                        src={`/assets/images/working-step/icon/${process.icon}`} 
                        alt="Working process" 
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">{process.title}</h6>
                    <p className="disc">
                      {process.description}
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

export default WorkProcess