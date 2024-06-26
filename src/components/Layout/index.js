import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import ParticlesComponent from '../Particle';

export default function Layout() {
  return (
    <div className='App'>
      <ParticlesComponent id='particles'/>
      <Sidebar/>
      <div className="page">
         <span className='tags top-tags'>&lt;body&gt;</span>
    
          <Outlet/>

          <span className='tags bottom-tags'>&lt;/body&gt;</span>
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
      </div>
    </div>
  )
}
