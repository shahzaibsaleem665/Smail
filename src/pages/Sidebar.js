import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from '../components/SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<EditIcon fontSize='large'/>}
        className='sidebar__compose' >
        Compose        
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={50} />
    </div>
  )
}
export default Sidebar