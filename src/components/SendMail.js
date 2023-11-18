import React, { useState } from 'react';
import './SendMail.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import MaximizeOutlinedIcon from '@mui/icons-material/MaximizeOutlined';
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
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [recepients, setRecepients] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  console.log(recepients);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('Emails').add({
      to: recepients,
      subject: subject,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
    setIsMaximized(false);
  };

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
    setIsMinimized(false);
  };

  return (
    <div className={`sendMail ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}>
      <div className='sendMail__header'>
        <div className='sendMail__headerLeft'>
          <h4>New Message</h4>
        </div>
        <div className='sendMail__headerRight'>
          {isMinimized ? (
            <MaximizeOutlinedIcon onClick={toggleMaximize} />
          ) : (
            <MinimizeOutlinedIcon onClick={toggleMinimize} />
          )}
          <OpenInFullOutlinedIcon />
          <CloseOutlinedIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
        </div>
      </div>
      {!isMinimized && (
        <form>
          <input
            type='email'
            name='To'
            required
            value={recepients}
            onChange={(event) => setRecepients(event.target.value)}
            placeholder='Recepients'
          />
          <input
            type='text'
            name='subject'
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder='Subject'
          />

          <textarea
            type='text'
            name='message'
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className='sendMail__message'
          />

          <div className='sendMail__options'>
            <Button className='sendMail__send' onClick={handleSubmit} type='submit'>
              Send
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
      )}
    </div>
  );
}

export default SendMail;
