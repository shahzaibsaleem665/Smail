import React from 'react'
import './EmailRow.css'

import { Checkbox, IconButton } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function EmailRow({ id, title, subject, description, time}) {
    const history = useHistory();

  return (
    <div className='emailRow' onClick={() => history.push('/mail')}>
        <div className='emailRow__options'>
            <Checkbox />
            <IconButton>
                <StarOutlineIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <div className='emailRow__title'>
    <h3>{title}</h3>
        </div>

        <div className='emailRow__message'>
        <h4>{subject}
        <span className='emailRow__description'> -{" "}
        {description}
        </span>
        </h4>
        </div>

        <p className='emailRow__time'>
            {time}
        </p>

    </div>
  )
}

export default EmailRow