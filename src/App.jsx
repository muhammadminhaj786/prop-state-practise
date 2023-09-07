import React from 'react'
import MyNavbar from './assets/Navbar'
import MyBody from './assets/MyBody'
import { Link, Route, Routes } from 'react-router-dom'
import About from './assets/About'
import Contact from './assets/Contact'
import List from './assets/List'
import Counter from './assets/Counter'
import Form from './assets/Form'

function App() {
  return (
    <div>
      <div className="links">
        <ul>
          <li>
          <Link to='/About' >About</Link>
          </li>
          <li>
          <Link to='/Contact' >Contact</Link>
          </li>
          <li>
          <Link to='/' >Home</Link>
          </li>
        </ul>
      </div>
    <Routes>
      <Route path='/' Component={MyBody} />
      <Route path='/about' Component={About} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    <div>
      <List />
      <Counter />
      <Form />
    </div>
    
    </div>
  )
}

export default App