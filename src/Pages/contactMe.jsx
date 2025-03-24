// components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactMe.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here, e.g., send data to an API or your email
    // EmailJS parameters
    const serviceId = 'service_icpkvkl';
    const templateId = 'template_bhrtk0n';
    const userId = 'GKcS4UNXKGCZhjasD';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', subject: '' }); // Reset form after successful submission
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="content">
      <h2>Contact Me</h2>
      <div className="contactme-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows="4" required onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;