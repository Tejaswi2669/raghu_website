import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMobileAlt,
  FaCommentDots,
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gq1shyh',     // ✅ Your EmailJS service ID
        'template_u6jqf88',    // ✅ Your template ID
        form.current,
        'pKqAUWuHrVtLHqoUo'    // ✅ Your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong. Try again!');
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-cards">
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>
            Konidena Rd, K.Rajupalem, Bapatla district, Andhra Pradesh
            <br />
            523301
          </p>
        </div>
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p>8897675338</p>
          <p>7795183942</p>
        </div>
        <div className="card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>Jasti.Raghuram@gmail.com</p>
        </div>
      </div>

      <div className="contact-section">
        <div className="map-container">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.476703436209!2d80.0817277!3d16.0076391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a8b855f171f0d%3A0x339f4b9f8f282d99!2sHaripriya%20Granites!5e0!3m2!1sen!2sin!4v1586879649742"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <h3>Contact Form</h3>

          <div className="input-group">
            <FaUser />
            <input type="text" name="user_name" placeholder="Your Name *" required />
          </div>

          <div className="form-row">
            <div className="input-group">
              <FaEnvelope />
              <input type="email" name="user_email" placeholder="Email Address *" required />
            </div>
            <div className="input-group">
              <FaMobileAlt />
              <input type="text" name="user_mobile" placeholder="Mobile *" required />
            </div>
          </div>

          <div className="input-group textarea">
            <FaCommentDots />
            <textarea name="message" rows="4" placeholder="Your Comments *" required></textarea>
          </div>

          <button type="submit" className="send-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
