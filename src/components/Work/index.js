import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import project1 from '../../assets/images/project-1.png'
import project2 from '../../assets/images/project-2.png'
import Loader from 'react-loaders';

export default function Work() {
    const projects = [
        {
            id: 1,
            title: 'Course List and Coding Contests Tracker',
            description: 'A frontend project displaying a list of courses on DSA, ML, Dev, and other topics. It also provides details of ongoing and upcoming coding contests from platforms like CodeChef, LeetCode, and Codeforces using an API.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
            imageUrl: project1, 
            liveLink: 'https://youtu.be/Eg5vOUMXDBs', 
            githubLink: 'https://github.com/am1t0/Coding_Platform_frontend',
        },
        // {
        //     id: 2,
        //     title: 'GitHub Project Collaboration Platform',
        //     description: 'A project leveraging GitHub API to enable users to create projects, form teams, and collaborate. It includes features for branch creation, pull requests, personal management spaces for todos, reminders, and long-term plans.',
        //     technologies: ['CSS', 'JavaScript', 'React','Redux','MongoDB','ExpressJS',"NodeJS"],
        //     imageUrl: project2,
        //     liveLink: null,
        //     githubLink: 'https://github.com/am1t0/GitIon',
        // },
        {
            id: 2,
            title: 'GitHub Project Collaboration Platform',
            description: 'A project leveraging GitHub API to enable users to create projects, form teams, and collaborate. It includes features for branch creation, pull requests, personal management spaces for todos, reminders, and long-term plans.',
            technologies: ['CSS', 'JavaScript', 'React','Redux','MongoDB','ExpressJS',"NodeJS"],
            imageUrl: project2,
            liveLink: null,
            githubLink: 'https://github.com/am1t0/GitIon',
        }
    ];
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, [])

    return (
        <>
           <h1 className='title'>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
            />
          </h1>

             <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <Loader type='pacman'/>
        </>
    );
}
