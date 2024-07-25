import React from 'react';
import "./skills.css";

const Software = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Software Engineering</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">R</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        </div>
      </div>
  )
}

export default Software;
