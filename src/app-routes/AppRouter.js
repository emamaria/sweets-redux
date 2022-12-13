import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Drinks from '../components/drinks/Drinks'
import Header from '../components/Header/Header'
import Home from '../components/home/Home'
import Navbar from '../components/Navbar/Navbar'


import Sweets from '../components/sweets/Sweets'

const AppRouter = () => {
  return (
    
     <Router>
      <Header/>
      <Navbar/>
       <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/sweets" element={<Sweets/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        </Routes>
    </Router>
    
  )
}

export default AppRouter