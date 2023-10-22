import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from '../components/SidebarOption';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button startIcon={<EditIcon fontSize='large'/>}
        className='sidebar__compose' onClick={() => dispatch(openSendMessage())} >
        Compose        
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={50} selected={true}/>
        <SidebarOption Icon={StarOutlineIcon} title="Starred" number={40} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={42} />
        <SidebarOption Icon={SendSharpIcon} title="Sent" number={12} />
        <SidebarOption Icon={DescriptionSharpIcon} title="Drafts" number={5} />
        <SidebarOption Icon={ExpandMoreSharpIcon} title="More" number={null} />
        <div className='sidebar__footer'>
            <div className='sidebar__footerLabel'>
            <h4>Labels</h4>
            <IconButton>
            <AddSharpIcon />
            </IconButton>
            </div>
        </div>
    </div>

  )
}
export default Sidebar