import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Sidebar() {
  const user = useSelector(selectUser)

 const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
 )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://img.freepik.com/free-photo/violet-watercolor-texture-background_1083-172.jpg?1?w=360' alt=''></img>
        <Avatar src= {user.photo} className='sidebar__avatar' >{user.email[0]}</Avatar>
        <h2>{user.name}</h2>
        <h4>{user.email} </h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>234</p>
        </div>
        <div className='sidebar__stat'>
        <p>Views on post</p>
            <p className='sidebar__statNumber'>250</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent </p>
        {recentItem('reactjs')}
        {recentItem('python')}
        {recentItem('programming')}
        {recentItem('LPP')}
        {recentItem('OSI')}
        {recentItem('reactjs')}
      </div>
    </div>
  );
}

export default Sidebar
