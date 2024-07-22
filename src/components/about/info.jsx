import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3.5 Years studying and working in IT</span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">20+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-certification about__icon'></i>

            <h3 className="about__title">Certifications</h3>
            <span className="about__subtitle">1</span>
        </div>
    </div>
  )
}

export default Info
