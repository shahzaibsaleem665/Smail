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
        <Button startIcon={<EditIcon/>}
        className='sidebar__compose' onClick={() => dispatch(openSendMessage())} >
        Compose        
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={null}  />
        <SidebarOption Icon={StarOutlineIcon} title="Starred" number={null} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={null} />
        <SidebarOption Icon={SendSharpIcon} title="Sent" number={null} selected={true}/>
        <SidebarOption Icon={DescriptionSharpIcon} title="Drafts" number={null} />
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