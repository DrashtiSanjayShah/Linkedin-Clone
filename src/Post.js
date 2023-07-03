import React,{forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import { ThumbUpAltOutlined } from '@mui/icons-material';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl} >{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
        
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlined} title='Like' />
        <InputOption Icon={CommentIcon} title='Comment' />
        <InputOption Icon={AutorenewIcon} title='Repost' />
        <InputOption Icon={SendIcon} title='Like' />
      </div>
    </div>
  );
}
);
export default Post;
