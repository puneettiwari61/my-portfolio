import React from 'react';

export default function Footer() {
  return (
      <footer className='footer'>
          <div className='connect'>
          <a href='https://www.facebook.com/heyitspuneet' rel='noopener noreferrer' target='_blank'><i class="fab fa-facebook-square"></i></a>
          <a href='https://twitter.com/puneettiwari61' rel='noopener noreferrer' target='_blank'><i class="fab fa-twitter-square"></i></a>
          <a href='https://github.com/puneettiwari61' rel='noopener noreferrer' target='_blank'><i class="fab fa-github-square"></i></a>
          <a href='https://medium.com/@puneettiwari61' rel='noopener noreferrer' target='_blank'><i class="fab fa-medium"></i></a>
          </div>
          <small className='last'> &copy; 2020 Puneet Tiwari. All rights reserved.</small>
      </footer>
  );
}
