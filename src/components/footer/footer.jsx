import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Selassie Kwame Esiape</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>

            </ul>

            <div className="footer__social">
                <a
                href='https://www.instagram.com/selassieek/'
                className='footer__social-link'
                target='_blank'
                >
                    <i className="uil uil-instagram"></i>
                </a>

                <a
                    href='https://linkedin.com/in/selassiekwameesiape'
                    className='footer__social-link'
                    target='_blank'
                >
                    <i className="uil uil-linkedin"></i>
                </a>

                <a
                    href='https://github.com/SelassieEsiape'
                    className='footer__social-link'
                    target='_blank'
                >
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className='footer__copy'>&#169; Selassie Kwame Esiape. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer;
