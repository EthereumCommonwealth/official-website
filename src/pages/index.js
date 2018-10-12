import React from 'react';
import Jumbotron from '../components/landing/Jumbotron';
import About from '../components/landing/About';
import ProjectsContainer from '../components/landing/ProjectsContainer';

const IndexPage = () => (
  <div>
    <Jumbotron />
    <About />
    <ProjectsContainer />
  </div>
);

export default IndexPage;
