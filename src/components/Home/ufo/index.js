import './index.scss'
// import prImg from '../../../assets/images/profile.png'
import prImg from '../../../assets/images/sit.png'

const Ufo = () => {
 
  return(
    <div className='ufo-container'>
         <div className="ufo">
         {/* <img src={prImg} alt=""  className='passenger-img'/> */}
         <div className="ufo-top"></div>
         <div className="ufo-middle"></div>
         <div className="ufo-bottom">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
         </div>
         <div className="light"></div>
     </div>
</div>
  )
}

export default Ufo