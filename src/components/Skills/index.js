import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCode,
    faServer,
    faLaptopCode,
    faToolbox,
    faCodePullRequest
  } from '@fortawesome/free-solid-svg-icons';
import SkillsCloud from '../SkillsCloud'

export default function Skills() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [animateLines, setAnimateLines] = useState(false);

    useEffect(() => {
      // Delay the animation by 1.5 seconds
      const timeoutId = setTimeout(() => {
        setAnimateLines(true);
      }, 1500);
  
      return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
      let timeId =  setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  
      return ()=> clearTimeout(timeId);
      
    }, [])


  return (
    <>
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['T', 'e','c','h','n','i','c','a','ls', ' ', 'S', 'k','i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
         <p className={`skills ${animateLines ? 'animate-lines' : ''}`}>
         <h2>
           <FontAwesomeIcon icon={faCode} className='icon'/> 
            Frontend Development
         </h2>
         <div className="desc">
              <h4> HTML | CSS | JavaScript | Bootstrap | React.js | Redux.js</h4>
              <span>Proficient in creating responsive and interactive web pages. Experienced in building user interfaces and managing state.</span>
         </div>
         </p>
         <p className={`skills ${animateLines ? 'animate-lines' : ''}`}>
          <h2>
            <FontAwesomeIcon icon={faServer} className='icon'/>
              Backend Development
         </h2>
         <div className="desc">
             <h4> NodeJs | ExpressJs | MongoDB | MySQL</h4>
             <span>Skilled in Express.js and MongoDB for building RESTful APIs and handling server-side logic with Node.js, ensuring efficient and scalable applications.</span>
         </div>
         </p>
         <p className={`skills ${animateLines ? 'animate-lines' : ''}`}>
          <h2>
            <FontAwesomeIcon icon={faLaptopCode} className='icon'/> 
             Programming Languages
         </h2>
         <div className="desc">
             <h4>Java | C | Javascript</h4>
             <span>Solid understanding of Java, Javascript and C, enabling effective problem-solving and software development across various domains.</span>
         </div>
         </p>
         <p className={`skills ${animateLines ? 'animate-lines' : ''}`}>
          <h2>
            <FontAwesomeIcon icon={faToolbox} className='icon'/>
              Tools and Version Control
         </h2>
         <div className="desc">
             <h4>VS Code | IntelliJ | Windows | Git | GitHub</h4>
             <span>Proficient in version control and collaboration, essential for modern development practices.</span>
         </div>
         </p>
      </div>

    
    </div>
     <SkillsCloud/>
    <Loader type="pacman" />
  </>
  )
}
