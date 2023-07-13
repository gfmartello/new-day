import React from 'react';
import './Contact.scss'

const Contact = () => {
  return (
    <section className='contact'>
      <h1>Contact</h1>
      To book a session, please email me at <a className='contact__link' href='mailto:kathymartello@gmail.com'>kathymartello@gmail.com</a>
      <br /> <br />
      Or call at: <a className='contact__link' href='tel:3474449637'>(347) 444-9637</a>
    </section>
  );
};

export default Contact;