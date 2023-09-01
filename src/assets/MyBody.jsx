import React from 'react'
import Login from './login'
import { useState } from 'react'
import New from './New'

export default function MyBody( props) {
  let [isLogedIn,setisLogedIn] = useState(true)

  function Loged(){
      setisLogedIn(false)
  }
  const bgClr = {
    backgroundColor: "black",
    height: '300px',
    color: 'white'
  }
  const bgLight = {
    backgroundColor: "white",
    height: '300px',
    color: 'black'
  } 
  let [clrBool,setclrBool] = useState(true)
  function colorHandler(){
    setclrBool(false)
  }
  function DarkMode (){
    return (
      <div style={bgClr}>
        <h1>Dark Mode</h1>
      </div>
    )
  }
  function LightMode (){
    return (
      <div style={bgLight}>
        <h1>Light Mode</h1>
      </div>
    )
  }
  return (
    
    <div >
      {clrBool ? <DarkMode /> : <LightMode />}
      {isLogedIn ? <Login /> : <New />}  
      <h1>hello {props.value2}</h1>
      <button onClick={Loged}>Logout</button>
      <button onClick={colorHandler}>dark mode</button>
    </div>
  )
}
