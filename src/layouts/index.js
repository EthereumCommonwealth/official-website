import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/index.styl'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Callisto Gatsby Starter" />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
