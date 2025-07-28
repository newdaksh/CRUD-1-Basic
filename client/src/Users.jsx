import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000")

    .then((result) => {
      setUsers(result.data)
    })
    
    .catch((err) => {
      console.log(err)
    })
    
  }, [])
  

   const handleDelete = (id) => {
      axios.delete("http://localhost:5000/deleteUser/" + id)
      .then(() => {
        // Update the users state by filtering out the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='bg-amber-400 h-screen flex justify-center items-center gap-4'>
      <div className='bg-white w-[600px] rounded-xl p-10  '>

        <Link to="/create" className='p-2 bg-green-400 hover:cursor-pointer hover:bg-green-500 rounded-xl'>Add +</Link>

        <table className='table'>
          <thead>
            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Age</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>

                  <td className='p-3'>{user.name}</td>
                  <td className='p-3'>{user.age}</td>
                  <td className='p-3'>{user.email}</td>

                  <td className='p-3 flex gap-2'>
                    <Link to={`/update/${user._id}`} className='p-2 bg-blue-400 hover:cursor-pointer hover:bg-blue-500 rounded-xl'>Update</Link>

                    
                    <button
                    onClick={() => handleDelete(user._id)}
                    className='p-2 bg-red-400 hover:cursor-pointer hover:bg-red-500 rounded-xl'>Delete</button>
                  
                  </td>

                </tr>
              })
            }
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default Users