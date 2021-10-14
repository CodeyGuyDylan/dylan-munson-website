// Seo component that goes on every page

// Libraries
import { FC } from 'react'
import { Helmet } from 'react-helmet'

// Assets
import Favicon from '../assets/favicon.svg'

interface ISEO {
   description?: string
   title: string
}

// Query data from config file
const SEO: FC<ISEO> = ({ description, title }) => {
   const siteUrl = `https://dylanmunson.com`
   const image = Favicon
   const fullImage = Favicon
   const twitterUsername = `@DylanMunson8`
   const metaDescription = description || `An online resume jobs for Dylan Munson for Front-End or Back-End Web Development Jobs`
   const metaTitle = title || `Dylan Munson`

   return (
      <Helmet
         htmlAttributes={{ lang: 'en' }}
         title={metaTitle}
         titleTemplate={`%s | Dylan Munson`}
         meta={[
            {
               name: `description`,
               content: metaDescription,
            },
            {
               name: `image`,
               content: image,
            },
            {
               name: `og:url`,
               content: siteUrl,
            },
            {
               property: `og:title`,
               content: metaTitle,
            },
            {
               property: `og:description`,
               content: metaDescription,
            },
            {
               property: `og:type`,
               content: `website`,
            },
            {
               property: `og:image`,
               content: image,
            },
            {
               name: `twitter:card`,
               content: fullImage,
            },
            {
               name: `twitter:image`,
               content: image,
            },
            {
               name: `twitter:creator`,
               content: twitterUsername,
            },
            {
               name: `twitter:title`,
               content: metaTitle,
            },
            {
               name: `twitter:description`,
               content: metaDescription,
            },
         ].concat([])}
      />
   )
}

export default SEO
