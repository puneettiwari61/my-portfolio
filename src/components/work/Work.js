import React from 'react';
import Ly from './../../avatar/ly.png';
import Pl from './../../avatar/plants.png';
import Tic from './../../avatar/ttt.png';
import Food from './../../avatar/food.png';
import Todo from './../../avatar/todo.png'
import Red from './../../avatar/red.png'

export default function Work() {
  return (
    <div className='work'>
      <div className='work-head'>
          <h2 className='recent-work'>Here's a selection of some recent work. </h2>
      </div>
      <div className='color color2 color4'>
      <div className='ly-img-div ly-img-div2' id='todo'>
      <a href='https://puneettiwari61.github.io/my-todo-app/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Todo} alt='todo'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
      <div className='color color2 color4 color6'>
      <div className='ly-img-div ly-img-div2' id='red'>
      <a href='https://puneettiwari61.github.io/reddit-clone/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Red} alt='reddit'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
      <div className='color color2 color5'>
      <div className='ly-img-div ly-img-div2' id='food'>
      <a href='https://puneettiwari61.github.io/Food-delivery-website/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Food} alt='food'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
      <div className='color'>
      <div className='ly-img-div' id='lyrics'>
      <a href='https://findlyrics.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img' src={Ly} alt='lyrics'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
      <div className='color color3'>
      <div className='ly-img-div ly-img-div3' id='tic'>
      <a href='https://tictactoeplay.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img3' src={Tic} alt='tic'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
      <div className='color color2'>
      <div className='ly-img-div ly-img-div2' id='plant'>
      <a href='https://plantsman.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Pl} alt='plant'/></a>
        <div className='details'>
          <h4>Todo</h4>
          <p>Recently I worked on an overhaul of the marketing website for Trizic, a web-based advisory service platform. Friendly but also maintain its business like nature.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
