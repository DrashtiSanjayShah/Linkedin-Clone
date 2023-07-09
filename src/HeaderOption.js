import React from 'react';
import './HeaderOption.css';
import { Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function HeaderOption({Icon, title, avatar}) {
  const user = useSelector(selectUser);
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && 
      (<Avatar className='headerOption__icon'>{user?.email[0]} </Avatar> 
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
