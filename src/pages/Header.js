import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../utilities/Firebase';
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior, if applicable
  
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/login');
      })
      .catch((error) => {
        // Handle sign-out errors, if any
        console.error('Error signing out:', error);
      });
  };
  return (
    <div className='header'>
        <div className='header__left'>
        <IconButton>   {/* IconButton is used to give the menu ICon a button like look*/}
            <MenuIcon />
        </IconButton>
        <img src='https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg' alt='Gmail Logo' />
        </div>
        <div className='header__middle'>
        <IconButton>
            <SearchIcon />
          </IconButton>
            <input placeholder='Search mail' type='text' />
            <IconButton>
            <TuneIcon className='header__inputTune' />
            </IconButton>
        </div>

        <div className='header__right'>
          <IconButton>
            <HelpOutlineIcon />
            </IconButton>
            <IconButton>
            <SettingsIcon />
            </IconButton>
            <IconButton>
            <AppsIcon />
            </IconButton>
            <Avatar onClick={signOut} className='header__avatar' src={user?.photoURL ? user.photoURL : `https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg`}
/>
        </div>
    </div>
  )
}

export default Header