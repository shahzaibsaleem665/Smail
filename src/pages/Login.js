import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from '../utilities/Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (event) => {
      event.preventDefault();
      history.push("/register");
    }

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
        <Button className='login__button' onClick={signIn}>Login using  <img src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' alt='text'height= '20px'/>
        </Button>   
        <Link to='/register'> 
        <Button className='login__button' onClick={register}>Login using  <img src='https://static.vecteezy.com/system/resources/previews/020/009/601/original/email-and-mail-icon-black-free-png.png' alt='text' height='25px'/>
        </Button>
        </Link>
  
     
 
        </div>
    </div>
  )
}

export default Login