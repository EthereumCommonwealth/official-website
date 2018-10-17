import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../images/logo.svg';
import GithubIcon from '../../images/github.svg';

const handleScroll = (id, e) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ block: 'start', behavior: 'smooth' });
};


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
          <a
            href="https://github.com/EthereumCommonwealth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="" />
          </a>
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
