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

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>



    </Helmet>

    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
