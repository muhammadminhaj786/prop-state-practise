import React, { useState } from 'react'

const Form = () => {
    const [name , setName] = useState('')
    function eventHandler(event){
        event.preventDefault();
        alert(`form submit ${name}`)
        setName('')
    }
  return (
    <div>
        <form onSubmit={eventHandler}>
            <label htmlFor="">
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} />
            </label>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form