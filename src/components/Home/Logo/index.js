import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'
import prImg from '../../../assets/images/logoA.png'

const Logo = () => {
 
  return(
        
    <div className="profileImg">
      <img src={prImg} alt="" />
    </div>
  )
}

export default Logo