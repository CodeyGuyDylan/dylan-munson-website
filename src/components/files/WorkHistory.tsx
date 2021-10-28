// Libraries
import { FC, Fragment } from 'react'
import styled from 'styled-components'

const boring = [
   {
      title: `Maxie's Pizza & Pasta`,
      position: `Line Cook / Delivery Driver`,
      where: `170 Blue Lakes Blvd, Twin Falls ID 83301`,
      startDate: `August 2014`,
      endDate: `May 2018`,
      reference: `Scott Craft - Manager - (208) 320-6817`,
      responsibilities: `I knew how to make all the food in the restaurant and did so most nights. I was in charge of prep in the mornings quite often. Once in a while I got to run the oven and manage orders and such. Pretty boring stuff here.`,
   },
   {
      title: `Bar Store and Restaurant Design`,
      position: `Warehouse Manager`,
      where: `198 Locust St. South, Twin Falls, ID 83301`,
      startDate: `May, 2018`,
      endDate: `January 2020`,
      reference: `Doug Birch - Manager - (208) 358-5439`,
      responsibilities: `I had a lot of different duties here. Most days I would use the forklift to unload trucks and then organize the inventory, then I would go on my smallwares deliveries to local restaurants around the area, and then I would get back and ready up and big deliveries coming up the next day. I had a lot of other small tasks such as making price tags, stocking the floor, taking inventory, etc. Despite being pretty boring of a job, I do think it helped me with my organizational skills.`,
   },
]

const relevant = [
   {
      title: `College of Southern Idaho`,
      position: `Software Support Specialist`,
      where: `315 Falls Ave, Twin Falls, ID 83301`,
      startDate: `January 2020`,
      endDate: `Current`,
      references: [
         `Ed Ditlefsen - Application & Data Director - (208) 352-0253`,
         `Kevin Mark - Chief Information Officer - (208) 965-3185`,
      ],
      responsibilities: `I am currently a 'jack of all trades' type of worker here, though most people in IT at the college are. There aren't well defined roles, so my duties change often, but I feel as though it's given me exposure to a wide variety of tools and languages so I am thankful for it. I have worked with Microsoft Office 365 applications such as Powerapps, SharePoint, and Power Automate. I have gotten expsure in Azure in the areas of Azure Logic Apps and Azure Function apps written in C# and TypeScript. I have learned how to manage content in the Cascade CMS as well as write templates using Velocity. Some one off jobs have given me experience using MSSQL, writing PowerShell scripts, writing in Classic ASP, and JavaScript/Node.js. It has been a lot to keep up with doing different things every day, but I do think it has been beneficial in teaching me how to work in real applications.`,
   },
   {
      title: `Novy Solutions`,
      position: `Head Programmer / Co-Owner`,
      where: `Remote`,
      startDate: `February 2020`,
      endDate: `Current`,
      references: [
         `Elijah Jensen - Business Manager / Co-Owner - (208) 969-0496`,
         `Zack Bartlett - Design Czar / Co-Owner - (208) 421-6621`,
      ],
      responsibilities: `All programming duties, mostly creating websites using Gatsby or a standard React App. Create Heroku apps using Node.js with Express as a backend if Netlify can't do something that needs to be done.`,
   },
]

const WorkHistory: FC = () => {
   return (
      <div>
         <h2>Relevant Jobs</h2>

         <hr />

         {relevant.map((job, index) => {
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
               <Job key={`${title}${index}`}>
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
                        <Fragment key={reference}>
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

         <h2>Less interesting jobs</h2>

         <hr />

         {boring.map((job, index) => {
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
               <Job key={`${title}${index}`}>
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
