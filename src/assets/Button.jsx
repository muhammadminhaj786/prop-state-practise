import React from 'react'

const Button = (props) => {
    let {val} = props
  return (
    <div>
        <button style={{height:'50px',width:'100px'}} onClick={props.onClick}>
            {val}
        </button>
    </div>
  )
}

export default Button