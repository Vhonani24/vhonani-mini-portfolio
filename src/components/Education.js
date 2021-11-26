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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2017</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2008-2012</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;