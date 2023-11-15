import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from '../utilities/Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
      auth.signInWithPopup(provider)
       .then(({user}) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }));
       })
       .catch(error => alert(error.message))
    };
  return (
    <div className='login'>
        <div className='login__container'>
        <img src='https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg' alt='Gmail Logo' />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login