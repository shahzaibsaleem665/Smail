import React, { useState } from 'react'
import './Register.css'
import { Button } from '@mui/material'
import { auth, db } from '../utilities/Firebase';
import { login,  } from '../features/userSlice';
import { storage } from '../utilities/Firebase';
import { useDispatch } from 'react-redux';

function Register() {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  const handleCreateAccount = async () => {
      // Check if required fields are not empty
      if (!fullName || !Email || !Password ) {
        alert('Please fill in all fields');
        return;
      }

     // Add user deails to Firestore
     

     db.collection('Users').add({
      displayName: fullName,
      email: Email,
      password: Password,
      photoUrl: ''
     });
    // Dispatch the user information to the Redux store
    dispatch(
      login({
        id: (await auth.createUserWithEmailAndPassword(Email,Password)).user.uid,
        displayName: fullName,
        email: Email,
        password: Password,
        photoUrl: ''
      })
    );

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
         
          <p>Already have an account? <a href='/loginPage'>Sign in</a> </p>
        </form>


        <Button onClick={handleCreateAccount}> Create Account</Button>
        </div>
        
        
    </div>
  )
}

export default Register