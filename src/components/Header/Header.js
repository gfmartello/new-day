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
          <img className='header__logo' src={dove} alt='Dove Logo' />
        </Link>
      </div>
      <nav className='nav'>
        <Link className='nav__item' to='/'>
          <li>Home</li>
        </Link>
        <Link className='nav__item' to='/aboutme'>
          <li>About Me</li>
        </Link>
        <Link className='nav__item' to='/individualpsychotherapy'>
          <li>Individual Psychotherapy</li>
        </Link>
        <Link className='nav__item' to='/contact'>
          <li>Contact</li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;