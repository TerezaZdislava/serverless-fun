import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import '../styles/components/contactForm.scss';

export default function Contact() {
  const [submitButtonText, setSubmitButtonText] = useState('Send');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cmx1mqz',
        'template_35ef29x',
        e.target,
        '6RcQpz_h-K-a_DiCS',
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitButtonText('Your message was sent');
          setSubmitButtonDisabled(true);
        },
        (error) => {
          console.log(error);
          alert('An error occurred, please try again.');
        },
      );
    e.target.reset();
  };
  return (
    <section className="contact-form">
      <h1>Let us know what's on your mind</h1>
      <form onSubmit={sendEmail}>
        <div className="content">
          <div>
            <label>Full name</label>
            <input required type="text" name="user_name" />
            <label>Email</label>
            <input required type="email" name="user_email" />
          </div>
          <div className="message">
            <label>Message</label>
            <textarea required name="message" />
          </div>
        </div>
        <button
          disabled={submitButtonDisabled}
          type="submit"
          className="formButton"
        >
          {submitButtonText}
        </button>
      </form>
    </section>
  );
}
