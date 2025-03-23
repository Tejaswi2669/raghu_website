import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaMobileAlt, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-page">
            <h2 className="contact-title">Contact Us</h2>

            <div className="contact-cards">
                <div className="card">
                    <FaMapMarkerAlt className="icon" />
                    <h3>Address</h3>
                    <p>16-1-25, Main Road, Gandhi Chowk, Tenali<br />522201</p>
                </div>
                <div className="card">
                    <FaPhoneAlt className="icon" />
                    <h3>Call Us</h3>
                    <p>8143577577</p>
                </div>
                <div className="card">
                    <FaEnvelope className="icon" />
                    <h3>Email Us</h3>
                    <p>info@spdstores.com</p>
                </div>
            </div>

            <div className="contact-section">
                <div className="map-container">
                    <iframe
                        title="Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.7476240306637!2d80.64819927595459!3d16.243582734708263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a06f65a97c4c3%3A0x5bda0a9617a06e96!2sSri%20Purna%20Department%20Stores!5e0!3m2!1sen!2sin!4v1711286476109!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <form className="contact-form">
                    <h3>Contact Form</h3>

                    <div className="input-group">
                        <FaUser />
                        <input type="text" placeholder="Your Name *" required />
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <FaEnvelope />
                            <input type="email" placeholder="Email Address *" required />
                        </div>
                        <div className="input-group">
                            <FaMobileAlt />
                            <input type="text" placeholder="Mobile *" required />
                        </div>
                    </div>

                    <div className="input-group textarea">
                        <FaCommentDots />
                        <textarea rows="4" placeholder="Your Comments *" required></textarea>
                    </div>

                    <button className="send-button">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
