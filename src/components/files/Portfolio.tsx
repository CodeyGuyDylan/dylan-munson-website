// Libraries
import { FC, Fragment } from 'react'

const websiteProjects = [
   {
      name: 'Office on Aging CSI',
      url: 'https://ooa.csi.edu/',
      stack:
         'Hosted on Netlify, built with Gatsby, Google Drive integration, Netlify CMS, Netlify Functions as "backend", Netlify Forms and Nodemailer for emails',
      desc:
         "My first ever website project. My supervisor at the College of Southern Idaho asked if anybody wanted to make a website for the Office On Aging because IT was so backed up we wouldn't be able to get to it for a long time. Me and one of my friends decided to use this as an opportunity to start a busniess and this would be our first project. This site is geared toward senior citizens and therefore the text is larger by default, and there is the option to increase it even more or decrease it. They wanted an easy way to add files to the site, and they already used Google Drive, so I set up integration so that they could easily add files to a Google Drive folder that would be displayed on the site as links in table form.",
   },
   {
      name: 'NW Liberty Academy',
      url: 'https://nwlibertyacademy.org/',
      stack:
         'Hosted on Netlify, built with Gatsby, Netlify CMS, Netlify Functions as "backend", Netlify Forms and Nodemailer for emails, Google Sheets Integration, Stripe for payments',
      desc:
         'This site was for a client that wanted their message to be clear, and wanted their website to be an easy way to sign up for their annual symposium. They also wanted to easily be able to see who had signed up for this event. Since they were on a limited budget, we deciced to add form submissions to a Google Sheet that they could easily access instead of taking the time to set up a database and a front end for them to view the data. They also wanted to use this site to write blogs, display essay winners, ect. To fill this requirement I set up a CMS with Netlify CMS so they could easily do this on their own.',
   },
   {
      name: 'Novy Solutions',
      url: 'https://novysolutions.com',
      stack:
         'Hosted on Netlify, built as a Single Page Application using Create React App, MongoDB to store form submissions, Netlify Forms as backup',
      desc:
         "Our business website that we found time to make after the last two projects, it's a simple four page site that contains a contact form. Nothing too complicated with this one.",
   },
   // {
   //    name: 'Devore & Munn Realty',
   //    url: 'https://devoremunn.com/',
   //    stack:
   //       'Hosted on Netlify, built with Gatsby, Netlify CMS, Netlify Forms and Nodemailer for emails',
   //    desc:
   //       'A simple website for a Realty company that essentially wanted an "Online Business Card" and an way to contact them through a web form. Pretty simple site, just some information and a web form.',
   // },
   {
      name: 'NV Farms',
      url: 'https://boring-pike-11852a.netlify.app/',
      stack:
         'Hosted on Netlify, built with Gatsby, Netlify CMS, Netlify Forms and Nodemailer for emails, Shopify integration',
      desc:
         "The most complicated site I have had the opportunity to make so far. This is an eCommerce site that uses Shopify as a backend for products. I used the very popular gatsby shopify plugin to grab the data from Shopify and set up live inventory checking so that the site doesn't need to be built every time something is purchased. This site is not technically complete yet as we are just waiting on a 3rd party to get back to NV Farms with templates for the product labels and yada yada yada. The site itself is essentially finished and hopefully I can update this soon with the real URL and remove this part about it not being finished.",
   },
]

const Portfolio: FC = () => {
   return (
      <div>
         <h2>Website Projects</h2>

         <hr />

         {websiteProjects.map((proj, index) => {
            const { name, url, stack, desc } = proj

            return (
               <Fragment key={`${name}${index}`}>
                  <h3>{name}</h3>

                  <p>
                     <b>URL:</b> <a href={url}>{url}</a>
                  </p>

                  <p>
                     <b>Tech Stack:</b> {stack}
                  </p>

                  <p>
                     <b>Description:</b> <br /> {desc}
                  </p>

                  <br />
               </Fragment>
            )
         })}

         <h2>Other Projects</h2>

         <hr />

         <h3>Netlify Builds Fitbit App</h3>

         <p>
            <b>URL:</b>{' '}
            <a href='https://github.com/CodeyGuyDylan/fitbit-netlify-builds-app'>
               https://github.com/CodeyGuyDylan/fitbit-netlify-builds-app
            </a>
         </p>

         <p>
            <b>Tech Stack:</b> Fitbit Studio
         </p>

         <p>
            <b>Description:</b> <br /> This is the only non-website procted I've
            been able to make thus far. It is not officially on the FitBit app
            store yet because I have not had the time to make it meet their
            requirements, but I use it for myself and have made it available to
            others. This app just lets me run builds for my websites from my
            fitbit. Since I have non programmers also making changes to sites,
            and sometimes automatic builds are not turned on, it is nice for me
            to be able to do this without having to be at a computer.
         </p>
      </div>
   )
}

export default Portfolio
