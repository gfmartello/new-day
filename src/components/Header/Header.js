import React from 'react';
import './Header.scss'
import dove from '../../assets/images/dove.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__title' to='/'>
          <h1>New Day Mental Health Services</h1>
        </Link>
        <Link className='header__logo' to='/'>
          <img className='header__logo' src={dove} alt='dove logo' />
        </Link>
      </div>
      <nav className='nav'>
        <Link to='/'>
          <li className='nav__item'>Home</li>
        </Link>
        <Link to='/aboutme'>
        <li className='nav__item'>About Me</li>
        </Link>
        <li className='nav__item'>Individual Psychotherapy</li>
        <li className='nav__item'>Contact</li>
      </nav>
    </header>
  );
};

export default Header;