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
import { useState } from 'react';
import SentMails from './SentMails';
import EmailList from './EmailList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(null);


  const renderContent = () => {
    if (selectedItem === '4')
    { 
      
      <div><EmailList /></div>
    
    }
    return null;
  };

  const handleItemClick = (number) => {
    // Update the selected item when an item is clicked
    setSelectedItem(number);
  };

 
  return (
    <div className='sidebar'>
        <Button startIcon={<EditIcon/>}
        className='sidebar__compose' onClick={() => dispatch(openSendMessage())} >
        Compose        
        </Button>

        <SidebarOption Icon={InboxIcon} number='1' title="Inbox"
        isSelected={selectedItem === '1'}
        onItemClick={handleItemClick}  />

        <SidebarOption Icon={StarOutlineIcon} number='2' title="Starred"
        isSelected={selectedItem === '2'}
        onItemClick={handleItemClick} />

        <SidebarOption Icon={LabelImportantIcon} number='3' title="Important"
        isSelected={selectedItem === '3'}
        onItemClick={handleItemClick} />

        <SidebarOption Icon={SendSharpIcon} number='4' title="Sent" 
        isSelected={selectedItem === '4'}
        onItemClick={handleItemClick} />

        <SidebarOption Icon={DescriptionSharpIcon} number='5' title="Drafts"
        isSelected={selectedItem === '5'}
        onItemClick={handleItemClick}   />

        <SidebarOption Icon={ExpandMoreSharpIcon} number='6'  title="More"
        isSelected={selectedItem === '6'}
        onItemClick={handleItemClick}  />

        <div className='sidebar__content'>
          {renderContent}
        </div>

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