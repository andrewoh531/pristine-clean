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

      {/*<script>*/}
        {/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){*/}
        {/*(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),*/}
        {/*m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)*/}
      {/*})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');*/}

        {/*ga('create', 'UA-30709309-2', 'auto');*/}
        {/*ga('send', 'pageview');*/}
      {/*</script>*/}

    </Helmet>

    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
