import React from "react";
import "./contactStyle.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Fill in the form below and we’ll get back to you shortly.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email ID"
            required
          />

          <input
            type="tel"
            placeholder="Your Contact Number"
          />

          <textarea
            placeholder="Tell your query"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="send-btn">
            Submit
          </button>
        </form>

        <div className="contact-info">
          <h3>Or Call Us</h3>
          <p className="contact-phone">+91 99999 99999</p>
        </div>
      </div>

      <div className="contact-right">
        <div className="image-overlay"></div>
      </div>
    </div>
  );
}
