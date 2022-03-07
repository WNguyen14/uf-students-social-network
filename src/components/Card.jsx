import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';

const Cards = ({text, click}) => {
  return (
    <>
    <Box sx={{
      display: 'inline-block !important',
      marginBottom: '5px',
      marginRight: '5px',
    }}>
      <Box sx={{backgroundColor: 'lightgrey', borderRadius: 1}}>
        <Typography variant="body2" m={1} sx={{display: 'inline-block'}}>
          {text}
        </Typography>
        <IconButton
          onClick={click}
        >
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
    </>
  );
}

export default Cards;