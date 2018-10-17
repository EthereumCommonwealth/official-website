import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../styles/index.styl';
import Logo from '../images/logo.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Ethereum Commonwealth</title>
      <link rel="icon" href={Logo} />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
