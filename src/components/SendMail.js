import React, { useState } from 'react'
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
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import firebase from 'firebase/compat/app';
import { db } from '../utilities/Firebase';



function SendMail() {
const dispatch = useDispatch();


const [recepients, setRecepients]=useState("");
const [subject, setSubject]=useState("");
const [message, setMessage]=useState("");

const handleSubmit = (event) => { 
 
   db.collection('Emails').add({
      to: recepients,
      subject: subject,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });  
    dispatch(closeSendMessage);
    event.preventDefault();   //  change this as it prevents sending data to firestore. 
   };
 

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <div className='sendMail__headerLeft'>
            <h4>New Message</h4>
            </div>
            <div className='sendMail__headerRight'>
            <MinimizeOutlinedIcon />
            <OpenInFullOutlinedIcon />
            <CloseOutlinedIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
            </div>
        </div>
        <form>
            <input type='email' name='To' required={true} value={recepients} onChange={(event) => setRecepients(event.target.value)} placeholder='Recepients'  />
            <input type='text' name='subject'  required={true} value={subject}  onChange={(event) => setSubject(event.target.value)} placeholder='Subject' />

            <textarea type='text' name='message'  required={true} value={message}  onChange={(event) => setMessage(event.target.value)} className='sendMail__message' />

            <div className='sendMail__options'>
                <Button className='sendMail__send' onClick={handleSubmit} type='submit'>Send
                <ArrowDropDownSharpIcon />
                </Button>
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