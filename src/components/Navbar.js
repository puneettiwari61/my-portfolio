import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './../avatar/myAvatar200.png'
function Navbar(){
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='lnav'>
            <Link  to=''><img className='avatar-1' onClick={(event)=>handleLineAbout(event)} src={Avatar} alt='my-avatar'/></Link>
        </div>
        <div className='rnav'>
          <div className='nav-link'><Link className='aboutlink' id='about' onClick={(event)=>handleLineAbout(event)} to=''>About</Link></div>
          <div className='nav-link'><Link className='aboutlink' id='work' onClick={(event)=>handleLineWork(event)} to='Work'>Work</Link></div>
          <div className='nav-link'><Link className='aboutlink' id='blog' onClick={(event)=>handleLineBlog(event)}to='Blog'>Blog</Link></div>
        </div>
      </nav>
    </header>
  )
}

function handleLineWork(event) {
  (event.target.style.textDecoration = 'underline');
  const ab = document.querySelector('#about');
  ab.style.textDecoration = 'none';
  const blg = document.querySelector('#blog');
  blg.style.textDecoration = 'none';
  // console.log(event.target)      
  // checkIt(event);    
}

function handleLineAbout(event) {
  const ab = document.querySelector('#about');
  ab.style.textDecoration = 'underline';
  const w = document.querySelector('#work');
  w.style.textDecoration = 'none';
  const blg = document.querySelector('#blog');
  blg.style.textDecoration = 'none';
}

function handleLineBlog(event) {
  (event.target.style.textDecoration = 'underline');
  const w = document.querySelector('#work');
  w.style.textDecoration = 'none';
  const ab = document.querySelector('#about');
  ab.style.textDecoration = 'none';
  // checkIt(event);
}

// function checkIt(event){
//   // if(event.target.href=='/Work'){
//   //   alert('work');
//   // }
//   console.log(event.target)
// }

export default Navbar