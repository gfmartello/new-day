import React from 'react';
import './Page.scss'
import dove from '../assets/images/dove.png'
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <section className='main'>
      <h1 className='main__title'>New Day Mental Health Services</h1>
      <img className='main__logo' src={dove} alt='dove logo' />
      <p className='main__blurb'>Welcome! <br />
        In today's stress filled world filled with uncertainties, many people find themselves needing the additional support of therapy. Therapy is not reserved for those that cannot function, rather it serves as a buffer to help people overcome difficult areas and times in their lives by learning to verbalize their feelings, needs and blind spots. Therapy can help propel you to go onto even further heights by overcoming challenges with the  help and support of a professional.
      </p>
    </section>
  );
};

export default Page;