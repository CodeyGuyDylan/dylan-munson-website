import { FC, Fragment } from 'react'
import styled from 'styled-components'

const boring = [
   {
      title: `Maxie's Pizza & Pasta`,
      position: `Line Cook/Delivery Driver`,
      where: `170 Blue Lakes Blvd, Twin Falls ID 83301`,
      startDate: `August 2014`,
      endDate: `May 31, 2018`,
      reference: `Scott Craft - Manager - (208) 320-6817`,
      responsibilities: `I knew how to make all the food in the restaurant and did so most nights. I was in charge of prep in the mornings quite often. Once in a while I got to run the oven and manage orders and such. Pretty boring stuff here`,
   },
   {
      title: `Bar Store and Restaurant Design`,
      position: `Warehouse Manager`,
      where: `198 Locust St. South, Twin Falls, ID 83301`,
      startDate: `May 19, 2018`,
      endDate: `January 6, 2020`,
      reference: `Doug Birch - Manager - (208) 358-5439`,
      responsibilities: `Unload trucks, organize the warehouse, manage all big equipment orders, stock shelves, inventory for entire warehouse and smallwares, smallwares deliveries, equipment deliveries, making price tags`,
   },
]

const relevant = [
   {
      title: `College of Southern Idaho`,
      position: `Software Support Specialist`,
      where: `315 Falls Ave, Twin Falls, ID 83301`,
      startDate: `January 7, 2020`,
      endDate: `Current`,
      references: [
         `Ed Detlifsen - IT Apps & Data Director - (208) 352-0253`,
         `Kevin Mark - Chief IT Officer - (208) 965-3185`,
      ],
      responsibilities: `Work with O365 applications such as PowerApps, SharePoint, and Power Automate. Work with Azure, specifically with Logic Apps and Function Apps written in C# and TypeScript. Work on public site (they use Cascade). Write PowerShell scripts, SQL queries, Classic ASP, Velocity, TypeScript, JavaScript, and Node.js for a variety of projects. Kind of the 'whatever needs to be done' person.`,
   },
   {
      title: `Novy Solutions`,
      position: `Head Programmer/Co-Owner`,
      where: `Work from home`,
      startDate: `February 2020`,
      endDate: `Current`,
      references: [
         `Elijah Jensen - Co-Owner - (208) 969-0496`,
         `Zack Bartlett - Co-Owner - (208) 421-6621`,
      ],
      responsibilities: `All programming duties, mostly creating websites using Gatsby or a standard React App. Create Heroku apps using Node.js with Express as a backend if Netlify can't do something that needs to be done.`,
   },
]

const WorkHistory: FC = () => {
   return (
      <div>
         <h2>Relevant Jobs</h2>

         <hr />

         {relevant.map(job => {
            const {
               title,
               position,
               where,
               startDate,
               endDate,
               references,
               responsibilities,
            } = job

            return (
               <Job key={title}>
                  <h3>{title}</h3>

                  <p>
                     <b>Position:</b> {position}
                  </p>

                  <p>
                     <b>Where:</b> {where}
                  </p>

                  <p>
                     <b>When:</b> <time>{startDate}</time> -{' '}
                     <time>{endDate}</time>
                  </p>

                  <p>
                     <b>References:</b> <br />
                     {references.map(reference => (
                        <Fragment>
                           {reference} <br />
                        </Fragment>
                     ))}
                  </p>

                  <p>
                     <b>Responsibilities:</b> <br />
                     {responsibilities}
                  </p>
               </Job>
            )
         })}

         <h2>Boring Jobs</h2>

         <hr />

         {boring.map(job => {
            const {
               title,
               position,
               where,
               startDate,
               endDate,
               reference,
               responsibilities,
            } = job

            return (
               <Job key={title}>
                  <h3>{title}</h3>

                  <p>
                     <b>Position:</b> {position}
                  </p>

                  <p>
                     <b>Where:</b> {where}
                  </p>

                  <p>
                     <b>When:</b> <time>{startDate}</time> -{' '}
                     <time>{endDate}</time>
                  </p>

                  <p>
                     <b>Reference:</b> {reference}
                  </p>

                  <p>
                     <b>Responsibilities:</b> <br />
                     {responsibilities}
                  </p>
               </Job>
            )
         })}
      </div>
   )
}

export default WorkHistory

const Job = styled.section`
   margin: 50px 0;
`
