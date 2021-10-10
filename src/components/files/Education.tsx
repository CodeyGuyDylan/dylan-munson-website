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
            <b>University:</b> The College of Southern Idaho
         </p>

         <p>
            <b>Address:</b> 315 Falls Ave, Twin Falls, ID 83301
         </p>

         <p>
            <b>Years:</b> 2014-2017
         </p>

         <p>
            <b>Details:</b> <br /> This was back when I wanted to be a
            mechanical engineer. The most relevant class I took during college
            that pertains to what I do now were two C++ classes. I enjoyed this
            class the most, but I know now that it did kind of a bad job of
            teaching me how to use the language in the real world for real
            applications. It wasn't until later on when I got really into coding
            and then web development.
         </p>

         <br />

         <h2>High School</h2>

         <hr />

         <p>
            <b>Degree:</b> High School Diploma
         </p>

         <p>
            <b>School:</b> Twin Falls High School
         </p>

         <p>
            <b>Address:</b> 1615 Filer Ave E. Twin Falls, ID 83301
         </p>

         <p>
            <b>Years:</b> 2011-2014
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
                  CodeCademy
               </a>
            </li>
            <li>
               <a href='https://scrimba.com/' target='_blank' rel='noreferrer'>
                  Scrimba
               </a>
            </li>
            <li>
               Various YouTube tutorials about Express, TypeScript, Node.js,
               etc.
            </li>
            <li>LOTS of reading documentation</li>
         </ul>
      </div>
   )
}

export default Education
