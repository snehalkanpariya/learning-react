import { useState } from 'react'

export default function Objects(){
    const[user,setUser] = useState({
            name:'Dipak',
            age:20,
            email:'dipak@gmail.com'
        })


    const celebrateBirthday=() =>{
        setUser(prevUser =>({
            ...prevUser,
            age:prevUser.age+1
        }));
    };


    const changeEmail=()=>{
        setUser(prevUser => ({
            ...prevUser,
            email:'dipakpatel@gmail.com'
        }))
    }
    return(
     <div>
        <h1> Name: {user.name} </h1>
            <h1> Age: {user.age} </h1>
            <h1> Email: {user.email} </h1>
            <button onClick={celebrateBirthday}>Celebrate Birthday</button>
            <button onClick={changeEmail}>Change Email</button>
     </div>
    )
}