import React from 'react'
import "./EmailList.css"
import { Checkbox, IconButton } from '@mui/material'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import KeyboardAltSharpIcon from '@mui/icons-material/KeyboardAltSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import Section from '../components/Section';
import EmailRow from '../components/EmailRow';
function EmailList() {
  return (
    <div className='emailList'>
        <div className='emailList__settings'>
            <div className='emailList__settingsLeft'>
                <IconButton>
                <Checkbox />
                </IconButton>
                <IconButton>
                <KeyboardArrowDownSharpIcon />
                </IconButton>
                <IconButton>
                <RefreshSharpIcon />
                </IconButton>
                <IconButton>
                <MoreVertSharpIcon />
                </IconButton>
                
            </div>
            <div className='emailList__settingsRight'>
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
        
        <div className='emailList__sections'>
            <Section Icon={InboxIcon} title="Inbox" selected={true} />
            <Section Icon={LocalOfferIcon} title="Promotions"  selected />
            <Section Icon={PeopleIcon} title="Social" selected />
            <Section Icon={InfoIcon} title="Updates"   selected />
            <Section Icon={ForumIcon} title="Forums"   selected />
        </div>
        <div className='emailList__list'>
                <EmailRow title="Dummy" subject="New Message" description="This is a test" time="10PM" />
        </div>

    </div>
  )
}

export default EmailList