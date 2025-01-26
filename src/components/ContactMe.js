import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactMe.css";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
    //const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .send(
        "service_r0rrott", 
        "template_kemxo6e",
        {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        },
        "JQoDAd0ItsO1Q1KHn"
        )
        .then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            //setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setError(null);
        },
        (err) => {
            console.error("FAILED...", err);
            setError("Failed to send your message. Please try again later.");
        }
        );
    };
    
    return (
    <div className="contact-page">
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Send
                </button>
            </form>
        </div>
    </div>
    );
};
    
    export default ContactMe;