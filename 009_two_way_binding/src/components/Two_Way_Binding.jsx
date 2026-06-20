import React from 'react'
import { useState } from 'react'

const Two_Way_Binding = () => {
     const[name,setName] = useState('')
  return (
    <div className='card'>
        <input 
        type="text"
        placeholder='Enter your name..'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <p> <strong> Live preview </strong> {name} </p>
    </div>
  )
}




const BasicFrom = () => {
  const[userName,setUserName] = useState('')
  const[email,setEmail]=useState('')

  const handleNameChange = (event) =>{
    setUserName(event.target.value)
  }


  const handleEmailChange = (event) =>{
    setEmail(event.target.value)
  }

  return(
    <div className="basic">
      <h1> Level 1 form</h1>
      <div>
        <label>Username</label>
        <input type="text"
          value={userName}
          onChange={handleNameChange}/>
        </div>

        <div>
          <label>Email</label>
          <input type="text"
          value={email}
          onChange={handleEmailChange}/>
        </div>
         <p className="card"> Live result : {userName} {email}</p>
      </div>


   
  )
}

export default BasicFrom


export const UniversalForm = () => {
  const[formData,setFormData] = useState({
    userName:'',
    email:''
  })

  const handleChange = (event) => {
    const value=event.target.value;
    const name=event.target.name

    setFormData((prevData) => ({
      ...prevData,
    [name]:value
    }))

  }
  return(
    <div className="universe">
      <h1> Universal Form </h1>
      <div>
        <label>
          Username:
        </label>
        <input type="text"
        name="userName"
              value={formData.userName}
              onChange={handleChange} />
      </div>
      <div>
        <label> Email: </label>
        <input type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}/>
      </div>

      <p className='card'>Live result: {formData.userName} {formData.email} </p>
    </div>
  )
}