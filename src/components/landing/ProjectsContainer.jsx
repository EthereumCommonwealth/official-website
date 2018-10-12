import React from 'react';
import Logo from '../../images/logo.svg';
import Project from './Project';
import { projectsdata } from '../../data/projectsdata';

const ProjectsContainer = () => (
  <div className="custom-container projects-container">
    <div className="title">
      <span />
      <h3>projects</h3>
      <img src={Logo} alt="" />
    </div>
    <div className="projects-column">
      {
        projectsdata.map((element, index) => {
          return <Project data={element} key={index} />;
        })
      }
    </div>
  </div>
);

export default ProjectsContainer;
