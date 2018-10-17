import React from 'react';
import Logo from '../../images/logo.svg';
import CurlyThing from '../../images/curlything.svg';

const About = () => (
  <div id="about" className="about custom-container">
    <div className="title">
      <span />
      <h3>about</h3>
      <img src={Logo} alt="" />
    </div>
    <div className="grid-container">
      <div>
        <p className="about-text">
          Ethereum Commonwealth is an Ethereum Classic development team. There are two main goals
          for Ethereum Commonwealth:
        </p>
        <ol>
          <li>
            Solve already-existing problems of Ethereum Classic chain.
          </li>
          <li>
            Develop, improve and maintain Ethereum Classic network.
          </li>
        </ol>
        <p>
          Additionally, Ethereum Commonwealth is working on alternative Ethereum-compatible chains
          improvements. We believe that all Ethereum-compatible networks form a common ecosystem.
          We think that by improving one of the parts of this common ecosystem, we also improve the
          adoption of all the other parts of it, thus improving ETC.
        </p>
      </div>
      <img src={CurlyThing} alt="" />
    </div>
  </div>
);

export default About;
