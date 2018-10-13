import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../images/logo.svg';
import GithubIcon from '../../images/github.svg';

const Jumbotron = () => (
  <div className="jumbotron">
    <nav className="navigation">
      <img src={Logo} alt="" />
      <ul>
        <li onClick={handleScroll.bind(this, 'about')}>
          About
        </li>
        <li onClick={handleScroll.bind(this, 'projects')}>
          Projects
        </li>
        <li onClick={handleScroll.bind(this, 'team')}>
          Team
        </li>
        <li>
          <img src={GithubIcon} alt="" />
        </li>
      </ul>
    </nav>
    <section>
      <h1 className="tittle">
        <span>
          Ethereum
        </span>
          Commonwealth
      </h1>
      <p className="slogan">
        Our goal is to track mistakes, solve them and introduce
        an improved implementation for Ethereum Classic.
      </p>
    </section>
  </div>
);

const handleScroll = (id, e) => {
  var element = document.getElementById(id);
  element.scrollIntoView({block: 'start', behavior: 'smooth'});
}

export default Jumbotron;
