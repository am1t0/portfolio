import React from 'react'
import './index.scss'

export default function index({letterClass,strArray,idx}) {
  return (
    <span>{
         strArray.map((char,i)=>(
             <span key={char+i} className={`${letterClass} _${i+idx}`}>
                {char}
             </span>
         ))
    }</span>
  )
}
