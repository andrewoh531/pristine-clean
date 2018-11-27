import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} >
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet"/>
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
)
