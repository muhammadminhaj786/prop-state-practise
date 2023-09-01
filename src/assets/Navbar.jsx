import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MyBody from './MyBody';
import Navbar from './Navbar.css'
import About from './About'

function MyNavbar(props) {
  let Myname = props.value
  const NavStyle = {
    height:'20%',
    width:'100%',
    border:'2px solid black'
  }
  return (
    <div style={NavStyle}>
      <div >
        <ul className="lists">
          <li>{Myname}</li>
        </ul>
      </div>
      {/* <Routes>
        <Route path='./'  element={<MyBody />}>Body</Route>
        <Route path='./About.jsx' element={<About />} >About</Route>  
      </Routes> */}
    </div>
  )
}

export default MyNavbar