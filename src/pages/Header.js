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
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const Logout = () => {
    dispatch(logout);
    history.push('/login');
  }
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
            <IconButton onClick={Logout}>
            <Avatar className='header__avatar' src={user?.photoUrl}/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header