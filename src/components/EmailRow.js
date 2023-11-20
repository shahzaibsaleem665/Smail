import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
function EmailRow({ id, title, subject, description, time, onIconClick}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = (e) => {
        const isCheckboxOrStar = e.target.closest('.emailRow__options');
        if (!isCheckboxOrStar)
        {
        dispatch(selectMail({
            id, 
            title,
            subject,
            description,
            time
        })
        );
        history.push('/mail')
    }
};
  return (
    <div className='emailRow' onClick={openMail} >
        <div className='emailRow__options' >
            <Checkbox onClick={() => onIconClick && onIconClick(id)} />
            <IconButton>
                <StarOutlineIcon onClick={() => onIconClick && onIconClick(id)} />
            </IconButton>
            <IconButton>
                <LabelImportantIcon onClick={() => onIconClick && onIconClick(id)} />
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