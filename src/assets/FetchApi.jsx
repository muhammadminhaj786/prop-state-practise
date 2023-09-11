import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    let [users,setUsers] = useState([])
    const FetchUserApi=() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            setUsers(data)
        })
        
    }
    useEffect(()=>{
        FetchUserApi()
    },[])
    return (
    <div>
         <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default FetchApi