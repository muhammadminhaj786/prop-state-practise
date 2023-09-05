import React from 'react'

const List = () => {
    let arr = ['apple','mango','orange']

  return (
    <>
    {
        arr.map((value,index) =>{
            return(
                <li key={index}>{value}</li>
            )
        })
    }
    </>
  )
}

export default List