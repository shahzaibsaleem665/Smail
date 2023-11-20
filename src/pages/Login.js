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
  return (
    <div className='login'>
      <div className='login__header'>
      <Link to='/register'> 
        <Button className='login__headerButton' onClick={register}>Create Account</Button>
        </Link>
  
      </div>
        <div className='login__container'>
        <img src='https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg' alt='Gmail Logo' />   
        <Link to='/loginPage' > 
        <Button className='login__button' >Login using  <img src='https://static.vecteezy.com/system/resources/previews/020/009/601/original/email-and-mail-icon-black-free-png.png' alt='text' height='25px'/>
        </Button>
        </Link>

        
     
 
        </div>
    </div>
  )
}

export default Login