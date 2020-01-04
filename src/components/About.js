import React from 'react';
import Hi from './../avatar/myAvatar200.png';
import Transitiondiv from './Transitiondiv'

function About() {
  return (
    <div className='about'>
      <div className='about-me'>
        <div className='hi-img-div'>
          <img className='hi-img' alt='hi' src={Hi} />
        </div>
        <div className='writing'>
          <h3 className='gesture'>Hi</h3>
          <p className='para-1'>I m a full-stack web developer. Passionate about creating web applications.</p>
        </div>
      </div>
      <hr />
      <div className='about-me'>
      <h2 className='what-i-can-do'>What I can do.</h2>
        <div className='what-i-do'>
          <div className='hi-transition'>
            <div className='hi-img-div'>
              <img className='hi-img' alt='hi' src={Hi} />
            </div>
            <hr className='hr-2'/>
            <div className='transition'>
              <Transitiondiv />
              <div>
              </div>
            </div>
          </div>
          <div className='writing writing2'>
            <h3 className='gesture gesture-2'>Full-Stack Applications</h3>
            <p className='para-1 para-2'>Starting from basics HTML, CSS, JS to REACT JS and NODE JS</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='about-me'>
        <div className='what-i-do'>
        <div className='writing writing2'>
            <h3 className='gesture gesture-2'>Develop what you need.</h3>
            <p className='para-1 para-2'>I can help in creating Fast, Responsive, Intuitive, Dynamic web apps.</p>
          </div>
          <div className='hi-transition hi-transition2'>
          <div className='transition'>
              <div className='video'></div>
          </div>
          <hr className='hr-2'/>
          <div className='hi-img-div'>
          <img className='hi-img' alt='hi' src={Hi} />
            </div>
            </div>
          </div>
        </div>
        <hr className='hr-3'/>
        <h2 className='what-i-can-do help'>Want my help in your project</h2>
        <a className='message'  href="mailto:puneettiwari61@gmail.com ? subject=lets connect"><i className="far fa-envelope"></i>Message Me</a>
      </div>
  )
}

export default About;