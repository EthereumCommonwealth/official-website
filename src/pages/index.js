import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Jumbotron from '../components/landing/Jumbotron';
import About from '../components/landing/About';
import ProjectsContainer from '../components/landing/ProjectsContainer';
import Team from '../components/landing/Team';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teamData: undefined,
    };
  }

  componentWillMount() {
    const instance = axios.create({
      baseURL: 'https://callisto.network/clo-admin/api',
      timeout: 15000,
      headers: {
        Accept: 'application/json',
      },
    });

    instance.get('/team/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          loading: false,
          teamData: response.data,
        });
      })
      .catch((error) => {
      });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <About />
        <ProjectsContainer />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
