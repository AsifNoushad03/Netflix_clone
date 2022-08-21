import React from 'react'
import Banner from '../components/Banner/Banner'
import NavBar from '../components/Navbar/Navbar'
import RowPost from '../components/RowPost/RowPost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './SignupPage'

const Home = () => {
  return (
    <div>
      <Router>
      
       
      <Banner/>
      <NavBar/>
      <RowPost/>
     
      </Router>
    </div>
  )
}

export default Home
