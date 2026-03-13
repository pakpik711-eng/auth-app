import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [error,setError] = useState('')
 const [loading,setLoading] = useState(false)

const navigate=useNavigate();


const {session,signUpNewUser}=UserAuth();
console.log(session)

const handleSignUp=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
        const result=await signUpNewUser(email,password);
        if(result.success){
            navigate("/dashboard");
        }
    } catch (error) {
        console.log(error);
        setError(error.message);
    }finally{
        setLoading(false);
    }
}

  return (
    <>
   <form onSubmit={handleSignUp}>
        <h2>Sign up today!...</h2>
        <div>
       <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/><br/>  
       <input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/><br/>
       <button type='submit' disabled={loading}>Sign up</button>
       {error && <p style={{color:"red"}}>{error}</p>}
        </div>
        <p>Already have an account? <Link to ="/signin"> sign in</Link></p>
    </form>
    </>
  )
}

export default Signup