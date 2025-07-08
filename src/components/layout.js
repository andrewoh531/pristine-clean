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
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <meta name="description" content="Pristine Clean offers professional, reliable, and eco-friendly home and office cleaning services. Relax and leave the cleaning to us! Serving Sydney and surrounding areas." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://pristineclean.com.au/" />
          {/* Structured data for LocalBusiness will be added here */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Pristine Clean",
                "telephone": "+61 0426 262 338",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Burdett St",
                  "addressLocality": "Hornsby",
                  "addressRegion": "NSW",
                  "postalCode": "2077",
                  "addressCountry": "AU"
                },
                "url": "https://pristineclean.com.au",
                "priceRange": "$$"
              }
            `}
          </script>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:200"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:600"
            rel="stylesheet"
          />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
)
