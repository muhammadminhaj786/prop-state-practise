import React, { useEffect, useState } from 'react'
import Button from './Button'

const Counter = () => {
    useEffect(()=>{
        console.log('componend did mount')
    },[])
    let [count,setCount] =useState(0)
    function addCount() {
        setCount(++count)
    }
    useEffect(()=>{
        console.log("component did updating")
    },[count])
    function subCount (){
        if( count <=0){
            return 
        }
        setCount(--count)

    }
  return (
    <div>
        <h1 style={{textAlign:'center',width:'200px'}}>{count}</h1>
        <div style={{display:'flex',gap:'5px'}}>
            <Button val = 'add' onClick={addCount} />
            <Button val ='sub' onClick={subCount}/>
        </div>
    </div>
  )
}

export default Counter