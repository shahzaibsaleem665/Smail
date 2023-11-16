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
        <img src='https://o.remove.bg/downloads/0030b900-3788-403f-b350-b27b9a6a6e40/logo-removebg-preview.png' alt='Gmail Logo' />
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
            <Avatar onClick={signOut} className='header__avatar' src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header