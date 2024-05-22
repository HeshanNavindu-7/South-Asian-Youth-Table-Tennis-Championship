import React from 'react'
import { CardContent, Typography } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Player = ({ avatar, name, scores, countryFlag, status }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
      <Typography variant="body2" component="div">{status === 'win' ? <CheckCircleOutlineIcon className="text-red-500" /> : null}</Typography>
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <Typography variant="h6" component="div" className="font-bold">{name}</Typography>
         
        </div>
       
      </div>
      <div className="flex items-center">
            <img src={countryFlag} alt="Country Flag" className="w-12 h-8 mr-2" />
          
          </div>
      <div className="flex">
        {scores.map((score, index) => (
          <Typography key={index} variant="body2" component="div" className="mr-2">{score}</Typography>
        ))}
      </div>
    </div>
  )
}

export default Player;