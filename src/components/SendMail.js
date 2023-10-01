import React from 'react'
import './SendMail.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import { Button } from '@mui/material';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function SendMail() {
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <div className='sendMail__headerLeft'>
            <h4>New Message</h4>
            </div>
            <div className='sendMail__headerRight'>
            <MinimizeOutlinedIcon />
            <OpenInFullOutlinedIcon />
            <CloseOutlinedIcon className='sendMail__close'/>
            </div>
        </div>
        <form>
            <input type='text' placeholder='Recepients' />
            <input type='text' placeholder='Subject' />
            <input type='text' className='sendMail__message' />

            <div className='sendMail__options'>
                <Button className='sendMail__send'>Send</Button>
                <FormatColorTextOutlinedIcon />
                <AttachFileOutlinedIcon />
                <InsertLinkOutlinedIcon />
                <EmojiEmotionsOutlinedIcon />
                <AddToDriveOutlinedIcon />
                <ImageOutlinedIcon />
                <LockClockOutlinedIcon />
                <DrawOutlinedIcon />
                <MoreVertIcon />
                <DeleteOutlineOutlinedIcon className='sendMail__delete' />

            </div>
        </form>


    </div>
  )
}

export default SendMail