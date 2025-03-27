import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contactMe.css';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const [showBubble, setShowBubble] = useState(false);
  const bubbleRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_u5nkkzf';
    const templateId = 'template_bhrtk0n';
    const userId = 'jNXsCzJH9V5QW5y3k';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        setShowBubble(true);

        // Animate in
        gsap.fromTo(
          bubbleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );

        // Animate out after 3 seconds
        setTimeout(() => {
          gsap.to(bubbleRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => setShowBubble(false),
          });
        }, 3000);

        setFormData({ name: '', email: '', message: '', subject: '' });
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
          <input type="text" name="name" placeholder="Your Name" value={formData.name} required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} required onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} required onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows="4" value={formData.message} required onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
      {showBubble && (
        <div className="confirmation-bubble" ref={bubbleRef}>
          🎉 Message sent!
        </div>
      )}
    </div>
  );
};

export default Contact;
