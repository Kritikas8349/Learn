import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw5j7uyctTxrAACmuaPHHmq2Juf0dEgLs9ncUspDnxdfScudoozipyo3cpVb0xnMbfBmw/exec";

    const googleForm = new FormData();
    googleForm.append("fullName", formData.fullName);
    googleForm.append("email", formData.email);
    googleForm.append("countryCode", formData.countryCode);
    googleForm.append("phone", formData.phone);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: googleForm,
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        setLoading(false);
        alert("❌ Error: Google Sheet me save nahi hua!");
      }
    } catch (error) {
      setLoading(false);
      alert("❌ Error: " + error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-popup" onClick={onClose}>✕</button>

        {!submitted ? (
          <>
            <h2 className="popup-title">Get in Touch</h2>
            <p className="popup-sub">Please fill the details below to continue.</p>

            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <div className="phone-row">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="+91"
                  required
                  className="country-select"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={{ width: "30%" }}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: "70%" }}
                />
              </div>

              <button type="submit" className="popup-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit →"}
              </button>
            </form>
          </>
        ) : (
          <div className="thankyou-card">
            <FaEnvelope className="thankyou-icon" />
            <h2 className="thankyou-title">THANK YOU!</h2>
            <p className="thankyou-text">
              <span>Your message has been sent. </span><br />
              We'll be in touch shortly to answer all your questions!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
