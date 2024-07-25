import React from 'react';
import "./skills.css";

const Cyber = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Cyber Security</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Active Directory</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Network Traffic Analysis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Nmap</h3>
              <span className="skills__level">Experienced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Splunk</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Incident Handling</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>


        </div>
      </div>
  );
}

export default Cyber;
