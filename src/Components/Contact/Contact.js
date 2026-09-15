import React from 'react';
import { EMAIL, FACEBOOK_DM_URL, INSTAGRAM_DM_URL, QUOTE_MAILTO } from '../../siteConfig';
import { FacebookIcon, InstagramIcon, MailIcon } from '../Icons/Icons';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <div className="contact__panel">
        <div className="contact__copy">
          <h2>Let us shoot you a quote.</h2>
          <p>
            Tell us about your business and what you have in mind. We'll get back to you with
            ideas and pricing.
          </p>
        </div>

        <div className="contact__actions">
          <a href={QUOTE_MAILTO} className="btn btn--dark contact__email">
            <MailIcon />
            {EMAIL}
          </a>
          <div className="contact__socials">
            <a href={INSTAGRAM_DM_URL} className="btn btn--outline-dark" target="_blank" rel="noopener noreferrer" aria-label="Message us on Instagram">
              <InstagramIcon /> Instagram
            </a>
            <a href={FACEBOOK_DM_URL} className="btn btn--outline-dark" target="_blank" rel="noopener noreferrer" aria-label="Message us on Facebook">
              <FacebookIcon /> Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
