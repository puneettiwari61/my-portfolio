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
          <h4 className='app'>Todo-app</h4>
          <p className='app-desc'>That's my one of the recent project in vanilla js. This app is a fully functional todo-app, organizing your tasks with a list can make everything much more manageable.</p>
        </div>
      </div>
      </div>
      <div className='color color2 color4 color6'>
      <div className='ly-img-div ly-img-div2' id='red'>
      <a href='https://puneettiwari61.github.io/reddit-clone/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Red} alt='reddit'/></a>
        <div className='details'>
          <h4 className='app'>Reddit Clone</h4>
          <p className='app-desc'>Cloning existing website gives a whole new way of thinking. Its also done is pure javascript.</p>
        </div>
      </div>
      </div>
      <div className='color color2 color5'>
      <div className='ly-img-div ly-img-div2' id='food'>
      <a href='https://puneettiwari61.github.io/Food-delivery-website/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Food} alt='food'/></a>
        <div className='details'>
          <h4 className='app'>Todo</h4>
          <p className='app-desc'>I made this template by just HTML and CSS without using any styling library. Do check it out.</p>
        </div>
      </div>
      </div>
      <div className='color'>
      <div className='ly-img-div' id='lyrics'>
      <a href='https://findlyrics.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img' src={Ly} alt='lyrics'/></a>
        <div className='details'>
          <h4 className='app'>Search-Lyrics</h4>
          <p className='app-desc'>This is a lyrics search web-app. I made this in REACT JS. Its a fully responsive website.</p>
        </div>
      </div>
      </div>
      <div className='color color3'>
      <div className='ly-img-div ly-img-div3' id='tic'>
      <a href='https://tictactoeplay.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img3' src={Tic} alt='tic'/></a>
        <div className='details'>
          <h4 className='app'>Tic-Tac-Toe</h4>
          <p className='app-desc'>This was my first REACT JS project. Learned it from official docs of REACT JS. I have added styling and sound effects to it.</p>
        </div>
      </div>
      </div>
      <div className='color color2'>
      <div className='ly-img-div ly-img-div2' id='plant'>
      <a href='https://plantsman.netlify.com/' rel='noopener noreferrer' target='_blank'><img className='ly-img ly-img2' src={Pl} alt='plant'/></a>
        <div className='details'>
          <h4 className='app'>Plantsman</h4>
          <p className='app-desc'>Its an online plants shopping website. I made this project in REACT JS. Its my one of the finest project. Do check it out.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
