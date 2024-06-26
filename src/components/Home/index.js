import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoA from '../../assets/images/logoA.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import Ufo from './ufo'

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ',' ',' ',' ',' ',' ',' ', ' ','m', 'i', 't']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>’m</span>
                    <img src={LogoA} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />

                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>FullStack Developer /MERN stack</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            <Ufo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
