// ContactUs.jsx
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'your_service_id',    // e.g., service_abc123
        'your_template_id',   // e.g., template_xyz456
        formRef.current,
        'your_public_key'     // e.g., wXzYzAbCDefgh123
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required rows="5" />
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};
