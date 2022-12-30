import React from 'react'
import './photos.css'
import img1 from './img/1.png'
import img2 from './img/2.JPG'
import img3 from './img/3.png'
const Photos = () => {
  return (
    <div className='photos-container'>
        <img src={img1} className="pic pic1" alt="me"/>
        <img src={img3} className="pic pic3" alt="me"/>
    </div>
  )
}

export default Photos