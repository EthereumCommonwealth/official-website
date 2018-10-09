import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../images/logo.svg';
import GithubIcon from '../../images/github.svg';

const Jumbotron = () => (
  <div className="container jumbotron">
    <nav className="navigation">
      <img src={Logo} alt="" />
      <ul>
        <li>
          About
        </li>
        <li>
          Projects
        </li>
        <li>
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

export default Jumbotron;
