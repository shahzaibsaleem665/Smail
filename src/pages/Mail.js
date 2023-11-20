import React, { useState } from 'react'
import './Mail.css'
import { Avatar, Icon, IconButton } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import KeyboardAltSharpIcon from '@mui/icons-material/KeyboardAltSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';
import { selectUser } from '../features/userSlice'
function Mail() {
  {/* useHistory works with version 5 of react-router-dom, if you are using  latest version, useHistory is replaced with useNavigate */}
  const history = useHistory(); 
  const user = useSelector(selectUser);
  const optedMail = useSelector(selectOpenMail);
  const [collectionName, setCollectionName] = useState('Emails'); // Replace with your actual collection name

 
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
            <DeleteOutlineOutlinedIcon   />
          </IconButton><b>|</b> 
          <IconButton>
            <MailOutlineIcon />
          </IconButton>

          <IconButton>
            <WatchLaterOutlinedIcon />
          </IconButton>

          <IconButton>
            <AddTaskIcon />
          </IconButton><b>|</b> 

          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>

          <IconButton>
            <LabelOutlinedIcon />
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
        <div className='mail__body'>
          <div className='mail__bodyHeader'>
          <div className='mail__bodyHeaderLeft'>
          <h2>{optedMail?.subject}
          <IconButton>
          <LabelImportantOutlinedIcon className='mail__important' />
          </IconButton>
          </h2>
          </div>

          <div className='mail__bodyHeaderRight'>
          <IconButton>
          <PrintIcon />
          </IconButton>
          <IconButton>
           <LaunchIcon />
          </IconButton>
          </div>
        </div>

        <div className='mail__bodyDetails'>
        <div className='mail__bodyDetailsLeft'>
          <Avatar src={user?.photoUrl} />
           <p>{user?.displayName}</p>
           <p className='mail__bodyDetailsLeftEmail'>&lt;{user?.email}&gt;</p>
          </div>
          <div className='mail__bodyDetailsRight'>
          <p>{optedMail?.time}</p>
          <IconButton>
          <StarOutlineIcon />
          </IconButton>
          <IconButton>
          <ReplyIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
        <div className='mail__message'>
         <p>{optedMail?.description}</p>
        </div>
        </div>
    </div>
    
  )
}

export default Mail