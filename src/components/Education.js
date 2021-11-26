import React from "react";

const Education = () => {
  return (
    <div className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>  Education</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-Present</h3>
            <p>Completing a one-year coding program in Agile Web Development which is
            focused on technical skills to build web applications, collaboration skills needed
            to work successfully on a team, professional development, and leadership training(Certificate)..</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2017</h3>
            <p>Obtained a B.Sc. degree in Life and Environmental Sciences from the University of Johannesburg in 2018. Majored in Zoology and Environmental Management.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008-2012</h3>
            <p>Complete matric in 2012 from Mbilwi Secondary School..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;