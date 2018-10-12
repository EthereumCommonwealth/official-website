import React from 'react';
import Logo from '../../images/logo.svg';

const ProjectsContainer = () => (
  <div className="custom-container projects-container">
    <div className="title">
      <span />
      <h3>projects</h3>
      <img src={Logo} alt="" />
    </div>
    <div className="projects-column">
      <div className="project">
        <div className="project-title">
          <img src={Logo} alt="" />
          <h3>ERC223</h3>
        </div>
        <button className="btn btn-primary">
          visit website
        </button>
        <p>
          RC223 is a superset of the ERC20 token standard. It is a step forward towards economic abstraction
          at the application/contract level allowing the use of tokens as first class value transfer
          assets in smart contract development. It is also a more safe standard as it doesn't allow
          token transfers to contracts that don't support token receiving and handling.
        </p>
        <div className="social-icons">
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsContainer;
