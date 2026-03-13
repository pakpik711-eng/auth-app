import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../context/Authcontext'

const Signup = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [error,setError] = useState('')
 const [loading,setLoading] = useState(false)


const {session}=UserAuth();
console.log(session)

  return (
    <>
   <form>
        <h2>Sign up today!...</h2>
        <div>
       <input type='email' placeholder='Email' /><br/>  
       <input type='password' placeholder='password'/><br/>
       <button type='submit' disabled={loading}>Sign up</button>
        </div>
        <p>Already have an account? <Link to ="/signin"> sign in</Link></p>
    </form>
    </>
  )
}

export default Signup