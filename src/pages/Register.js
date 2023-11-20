import React, { useState } from 'react'
import './Register.css'
import { Button } from '@mui/material'
import { db } from '../utilities/Firebase';
function Register() {

  const [fullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  const handleCreateAccount = async () => {
      // Check if required fields are not empty
      if (!fullName || !Email || !Password ) {
        alert('Please fill in all fields');
        return;
      }

      // Add user details to Firestore, including the download URL of the profile picture
       db.collection('users').add({
        fullName: fullName,
        email: Email,
        password: Password
      });
  

      alert('Account created successfully');
      // You can redirect the user to another page if needed.

    }

  return (
    <div className='register'>
        <div className='register__container'>
        <h2>Create your account</h2>
        <p>Enter your details below</p>
        <form className='register__form'>
          <input type='text' required={true} value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full name'/>
          <input type='email' required={true} value={Email} onChange={(e) => setEmail(e.target.value)}placeholder='Email' />
          <input type='password' required={true} value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <label className='register__fileLabel'>
            Upload Picture 
            <input type='file' required={true} accept='image/*' hidden />
          </label>
          <p>Already have an account? <a href='/login'>Sign in</a> </p>
        </form>


        <Button onClick={handleCreateAccount}> Create Account</Button>
        </div>
        
        
    </div>
  )
}

export default Register