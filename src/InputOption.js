import React from 'react';
import './InputOption.css';
// import { colors } from '@material-ui/core';
import { pink } from '@mui/material/colors';

function InputOption({ Icon, title }) {
  return (
    <div className='inputOption'>
      <Icon sx={{ color: pink[500] }}/>
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
