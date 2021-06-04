
// Dependencies
import { Fragment } from 'react'
import Head from 'next/head'

// Component
const Seo = ({ title = '', description = '', image = '', projectName = '9 Realty' }) => {
  const formattedTitle = title.length > 0 ? `${title} - ${projectName}` : projectName

  return (
    <Head>
      <title>{ formattedTitle }</title>

      <meta property="og:title" content={ formattedTitle } />
      <meta name="twitter:title" content={ formattedTitle } />

      {
        description.length > 0 && (
          <Fragment>
            <meta name="description" content={ description } />
            <meta property="og:description" content={ description } />
            <meta name="twitter:description" content={ description } />
          </Fragment>
        )
      }

      {
        image.length > 0 && (
          <Fragment>
            <meta property="og:image" content={ image } />
            <meta name="twitter:image" content={ image } />
          </Fragment>
        )
      }
    </Head>
  )
}

// Export
export default Seo
