import React from 'react';
import './footer.css';
import gpt3Logo from'../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section-padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want any help?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Cretcherwoord K12 182 Alknjkcb, All</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>988 122 1043</p>
          <p>dummy@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2023 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
