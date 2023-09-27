import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import KeyboardAltSharpIcon from '@mui/icons-material/KeyboardAltSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Mail() {
  const history = useHistory(); 
   {/* useHistory works with version 5 of react-router-dom, if you are using  latest version, useHistory is replaced with useNavigate */}
  return (
    <div className='mail'>
        <div className='mail__tools'>
          <div className='mail__toolsLeft'>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>

          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton> | 
          <IconButton>
            <MailOutlineIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <AddTaskIcon />
          </IconButton> | 

          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>

          <IconButton>
            <LabelIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
          </div>
          <div className='mail__toolsRight'>
          <IconButton>
                <ChevronLeftSharpIcon />
                </IconButton>
                <IconButton>
                <ChevronRightSharpIcon />
                </IconButton>
                <IconButton>
                <KeyboardAltSharpIcon />
                </IconButton>
                <IconButton>
                <ArrowDropDownSharpIcon />
                </IconButton>
          </div>
        </div>

    </div>
    
  )
}

export default Mail