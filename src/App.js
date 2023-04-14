import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App