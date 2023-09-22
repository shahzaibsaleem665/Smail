import React from 'react'
import "./EmailList.css"
import { Checkbox, Icon, IconButton } from '@mui/material'
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
import Section from './Section';
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
            <Section Icon={InboxIcon} title="Inbox" selected={true} color="#0b57d0"/>
            <Section Icon={LocalOfferIcon} title="Promotions"  color="#0b57d0"selected />
            <Section Icon={PeopleIcon} title="Social" color="#0b57d0" selected />
            <Section Icon={InfoIcon} title="Updates" color="green"  selected />
            <Section Icon={ForumIcon} title="Forums" color="yellow"  selected />
        </div>
    </div>
  )
}

export default EmailList