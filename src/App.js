
import './App.css';

import React from 'react';
import Banner from './components/Banner/Banner';
import NavBar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { action, originals, comedy, horror, romance, doc } from './url'
import SignupPage from './Pages/SignupPage';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
       <Router>
      
      <Banner />
      <NavBar />
      
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={doc} title='Documentaries' isSmall />
     
     </Router>
    </div>
  );
}

export default App;
