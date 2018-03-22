import React from 'react';
import logo from 'assets/img/logo.png';
import './styles.scss';

const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const AppHeader = () => (
  <header>
    <img src={logo} alt="logo" />
    <time>{date.toLocaleString('ru', options)}</time>
  </header>
);

export default AppHeader;
