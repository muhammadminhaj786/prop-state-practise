import React from 'react'
import logo from './logo.svg' 

function Logo (props){
    let img = <img src={logo} />
    return img
}

export default function New() {
  return (
    <>
        <div>New</div>
        <Logo />
    </>
  )
}
