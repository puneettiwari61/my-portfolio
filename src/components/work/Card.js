import React from 'react';
import Js from '../../avatar/javascripticon.png'

export default function Card(props) {
  return (
    <div className='container'>
      <div className='card'>
        <div className='front'>
          <h4 className='blog-title'>{props.h1}</h4>
          <div className='js-img-div'><img className='js-img' src={Js} alt='blog'></img></div>
        </div>
        <div className='back'>
        <a href={props.ad} rel='noopener noreferrer' target='_blank' className='blog-link'>Have a Look <br/>at My Blog</a>
      </div>
    </div>
    </div>
  );
}
