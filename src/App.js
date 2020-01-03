import React from 'react';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/work/Work'
import Blog from './components/blog/Blog'
import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
      <Intro />
       <Route path='/' exact component={About}></Route>
       <Route path='/work' component={Work}></Route>
       <Route path='/blog' component={Blog}></Route>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
