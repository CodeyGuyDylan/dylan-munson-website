// Libraries
import { FC } from 'react'

const Education: FC = () => {
   return (
      <div>
         <h2>College</h2>

         <hr />

         <p>
            <b>Degrees:</b> Associates in Electrical, Mechanical, and Computer
            Engineering
         </p>

         <p>
            <b>Year:</b> 2017
         </p>

         <p>
            <b>School:</b> College of Southern Idaho
         </p>

         <p>
            <b>Address:</b> 315 Falls Ave, Twin Falls, ID 83301
         </p>

         <p>
            <b>Details:</b> <br /> When I first started at CSI, I wanted to be a
            mechanical engineer. The most relevant classes I took related to
            programming were two C++ classes. I enjoyed these classes the most,
            but I know now that they did an incomplete job of teaching me how to
            use the language for real world applications. It wasn't until I
            started working at CSI that I realized how to use the building
            blocks in a programming language to develop something that was
            actually useful.
         </p>

         <br />

         <h2>High School</h2>

         <hr />

         <p>
            <b>Degree:</b> High School Diploma
         </p>

         <p>
            <b>Year:</b> 2014
         </p>

         <p>
            <b>School:</b> Twin Falls High School
         </p>

         <p>
            <b>Address:</b> 1615 Filer Ave E. Twin Falls, ID 83301
         </p>

         <br />

         <h2>Other</h2>

         <hr />

         <ul>
            <li>
               750+ hours of online learning (and growing, learning is never
               done!)
            </li>
            <li>
               <a
                  href='https://www.freecodecamp.org/'
                  target='_blank'
                  rel='noreferrer'
               >
                  freeCodeCamp
               </a>
            </li>
            <li>
               <a
                  href='https://www.codecademy.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  codecademy
               </a>
            </li>
            <li>
               <a href='https://scrimba.com/' target='_blank' rel='noreferrer'>
                  Scrimba
               </a>
            </li>
            <li>Tutorial videos on YouTube</li>
            <li>LOTS of reading documentation</li>
         </ul>
      </div>
   )
}

export default Education
