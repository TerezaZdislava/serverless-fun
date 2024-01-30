import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import '../styles/components/contactForm.scss';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [submitButtonText, setSubmitButtonText] = useState(
    t('home.contact.button'),
  );
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
          setSubmitButtonText(t('home.contact.buttonSend'));
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
      <h1>{t('home.contact.headline')}</h1>
      <form onSubmit={sendEmail}>
        <div className="content">
          <div>
            <label>{t('home.contact.name')}</label>
            <input required type="text" name="user_name" />
            <label>{t('home.contact.email')}</label>
            <input required type="email" name="user_email" />
          </div>
          <div className="message">
            <label>{t('home.contact.message')}</label>
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
