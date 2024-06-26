import React, { useEffect, useState } from 'react';
import './index.scss';
import TagCloud from 'TagCloud';

const SkillsCloud = () => {

    const [appear,setAppear] = useState(false)

    useEffect(()=>{
        return ()=>{
            const container = '.tagCloud';
            const texts = [
                'HTML', 'CSS', 'Javascript', 'Java', 'C++', 'C', 'Python', 'ReactJs',
                'Angular', 'Bootstrap', 'MongoDB', 'NodeJs', 'ExpressJs', 'Git', 'GitHub',
                'VSCode', 'npm', 'Websockets', 'Redux', 'Sass', 'MySQL', 'JSON', 'DSA', 'OOPS'
            ]
            const options={
                radius:300,
                maxSpeed: "normal",
                initSpeed: 'fast',
                keep: true,
            }

            TagCloud(container,texts,options)
            console.log('hellow')
        }
    },[])

    return (
        <div className= {`text-sphere ${appear?'appear':''}`} >
            <span className='tagCloud'></span>
        </div>
    )
    
};

export default SkillsCloud;
