import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section "id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1
                         ? "qualification__button qualification__active button--flex" 
                         : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={
                        toggleState === 2
                         ? "qualification__button qualification__active button--flex" 
                         : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"
                            }
                    >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">East Airport International School</h3>
                            <span className="qualification__subtitle">Ghana - Elementary / High School</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">2006 - 2019</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Brigham Young University</h3>
                            <span className="qualification__subtitle">United States - University</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">2021 - Present</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                        toggleState === 2 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"
                            }
                    >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Library Clerk</h3>
                            <span className="qualification__subtitle">United States - J. Reuben Clark Law School</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">2021 - 2022</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Network Specialist</h3>
                            <span className="qualification__subtitle">United States - Brigham Young University Office of IT</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">2022 - Present</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
