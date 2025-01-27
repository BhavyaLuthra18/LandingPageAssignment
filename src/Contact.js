import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contactSection">
      <div>
        {/*----------ContactHeading------------- */}
        <h1 className="Header">Contact Us</h1>
        {/*--------Info---------- */}
        <div>
          {/*---------Email----------- */}
          <div className="Contactinfo">
            <p className="contactheader">
              {" "}
              <MdEmail /> Email
            </p>
            <p>workforeign@gmail.com</p>
          </div>
          {/*---------Phone No----------- */}
          <div className="Contactinfo">
            <p className="contactheader">
              {" "}
              <FaPhoneAlt />
              Phone
            </p>
            <p>+44(0)XXXX XXX XXX</p>
          </div>
          {/*---------------Contact Form--------------- */}
          <div>
            {/*-----Name Field---- */}
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Weak"
                required
              />
            </div>
            {/*-----Email Field---- */}
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
            {/*-----Message Field---- */}
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your query............."
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
