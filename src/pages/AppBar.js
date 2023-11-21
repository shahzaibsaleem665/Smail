import React from 'react'
import './AppBar.css'
import { Icon, IconButton } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddSharp from '@mui/icons-material/AddSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';

import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
function AppBar() {
  return (
    <div className='appbar'>
        <div className='appbar__top'>
        <IconButton>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png' height="20px"/>
    </IconButton>
   <IconButton>
    <img src='https://cdn.icon-icons.com/icons2/3053/PNG/512/google_keep_macos_bigsur_icon_190119.png' height="20px" />
   </IconButton>
   <IconButton>
   <img src='https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2=w240-h480-rw' height="20px" />
   </IconButton>
   <IconButton>
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/640px-Google_Contacts_icon_%282022%29.svg.png' height="20px" />
   </IconButton>    
   <HorizontalRuleIcon />   
        </div>

        <div className='appbar__bottom'>

           <IconButton >
            <AddSharpIcon />
           </IconButton>
           <IconButton>
            <ChevronRightSharpIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default AppBar