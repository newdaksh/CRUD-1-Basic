import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UpdateUsers = () => {

  const { id } = useParams()

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    axios.get("https://crud-app-basic.onrender.com/getUser/" + id)

    .then((result) => {
      console.log(result)
      setName(result.data.name)
      setAge(result.data.age)
      setEmail(result.data.email)
    })
    
    .catch((err) => {
      console.log(err)
    })
    
  }, [])


  const Update = (e) => {
    e.preventDefault();
    
    axios.put("https://crud-app-basic.onrender.com/updateUser/" + id, { name: Name, age: Age, email: Email })

    .then((result) => {
      console.log(result)
      navigate("/")
    })
    
    .catch((err) => {
      console.log(err)
    })
    
  }


  return (
    <>
      <div className='flex h-screen justify-center align-center gap-4 bg-fuchsia-300'>
        <div className='bg-white w-[500px] rounded-xl p-10 h-[350px]'>

          <form onSubmit={Update}>
            <h2 className='text-2xl font-bold'>Update USER</h2>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter name : " className='bg-gray-200 rounded-xl p-2 w-full'
              value={Name}
              onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input type="text" placeholder="Enter age : " className='bg-gray-200 rounded-xl p-2 w-full'
              value={Age}
              onChange={(e) => setAge(e.target.value)} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter email : " className='bg-gray-200 rounded-xl p-2 w-full'
              value={Email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button className='mt-2 p-2 bg-green-400 hover:cursor-pointer hover:bg-green-500 rounded-xl'>Update</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default UpdateUsers