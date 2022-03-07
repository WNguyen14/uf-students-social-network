import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react'
import './Post.css'
export default function Post({username, major,  message}) {
  
  return (
    <div className='post'>
        <div className='post_content'>
          
        <div className='post_header'>
            <AccountCircleIcon  />
            <div className='header_info'>
            <h2>{username}</h2>
            
            <p>{major} major</p>
              </div>
            </div>
        

        <div className='post_body'> 
            <p className='post_message'>
              {message}
            </p>
          </div>
        <div className='post_reaction'>
          <ThumbUpIcon className='reaction_icon'></ThumbUpIcon>
          <CommentIcon className='reaction_icon' />
        </div>
          
          </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    </div>
  )
}
