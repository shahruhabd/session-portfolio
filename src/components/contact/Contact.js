import React from 'react'
import './contact.css'
import git from './img/gthb.png'
import inst from './img/inst.png'
import disc from './img/dicrd.png'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h1 className='contact-title'>I'm in ...</h1>
        <div className='contact-items'>
          <div className='contact-el'>
            <img src={git} alt="github" className='contact-el-img'/>
            <a href="https://github.com/shahruhabd">shahruhabd</a>
          </div>
          <div className='contact-el'>
            <img src={inst} alt="inst" className='contact-el-img'/>
            <a href="https://www.instagram.com/shahruhabd/">@shahruhabd</a>
          </div>
          <div className='contact-el'>
            <img src={disc} alt="discord" className='contact-el-img'/>
            <a href="#">shah#4896</a>
          </div>
        </div>
    </div>
  )
}

export default Contact