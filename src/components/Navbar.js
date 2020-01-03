import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './../avatar/myAvatar200.png'
function Navbar(){
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='lnav'>
            <img className='avatar-1' src={Avatar} alt='my-avatar'/>
        </div>
        <div className='rnav'>
          <div className='nav-link'><Link className='aboutlink' to=''>About</Link></div>
          <div className='nav-link'><Link className='aboutlink' to='Work'>Work</Link></div>
          <div className='nav-link'><Link className='aboutlink' to='Blog'>Blog</Link></div>
        </div>
      </nav>
    </header>
  )
}


export default Navbar