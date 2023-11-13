import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Jumbotron from '../components/landing/Jumbotron';
import About from '../components/landing/About';
import ProjectsContainer from '../components/landing/ProjectsContainer';
import Team from '../components/landing/Team';

const IndexPage = () => (
  <div>
    <Jumbotron />
    <About />
    <ProjectsContainer />
    <Team />
    <Footer />
  </div>
);

export default IndexPage;
