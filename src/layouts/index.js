import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Pristine Clean"
      meta={[
        { name: 'description', content: 'Pristine Clean home cleaning services' },
        { name: 'keywords', content: 'home cleaning, domestic cleaning, home cleaning services, domestic cleaning services, maid services' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet"/>

    </Helmet>

    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
