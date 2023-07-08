import React from 'react';
import './News.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { pink } from '@mui/material/colors';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'> 
      <FiberManualRecordIcon /> 
       </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>

         </div>
    </div>

  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2> News</h2>
        <InfoIcon sx={{ color: pink[500] }}/>
        </div>
        {newsArticle("That one girl in B.Tech", "Top news - 14 subscribers")}
        {newsArticle("How was my SEM 4 paper", "Top video - 189 views")}
        {newsArticle("My goals this summer", "Top goal - share this channel with friends")}
        {newsArticle("Drashti Shah", "20 - 4th year IT student")}
    </div>
    
  );
}

export default Widgets;
