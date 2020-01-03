import React from 'react';
import Hi from './../avatar/myAvatar200.png';
import Transitiondiv from './Transitiondiv'

function About() {
  return (
    <div className='about' id='about'>
      <div className='about-me'>
        <div className='hi-img-div'>
          <img className='hi-img' alt='hi' src={Hi} />
        </div>
        <div className='writing'>
          <h3 className='gesture'>Hi</h3>
          <p className='para-1'>I'm a web designer / developer based in Toronto, Canada. I have a passion for web design and love to create for web and mobile devices.</p>
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
            <h3 className='gesture gesture-2'>Design what you want.</h3>
            <p className='para-1 para-2'>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='about-me'>
        <div className='what-i-do'>
        <div className='writing writing2'>
            <h3 className='gesture gesture-2'>Develop what you need.</h3>
            <p className='para-1 para-2'>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
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
      </div>
  )
}

export default About;