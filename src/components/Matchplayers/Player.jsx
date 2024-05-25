import { Table, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Player = ({ avatar, name, scores, countryFlag, status }) => {
  return (
    <div className="flex items-center justify-between p-3 -ml-12">
      <div className="flex items-center">
        <Typography variant="body2" component="div">{status === 'win' ? <CheckCircleOutlineIcon className="text-red-500 absolute -ml-8 -mt-3" /> : null}</Typography>
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-7" />
        <div>
          <Typography component="div" className="font-bold "> <span className=' text-sm' style={{ fontSize: "14px" }}>{name}</span></Typography>

        </div>

      </div>
      <div className="flex items-center">
        <img src={countryFlag} alt="Country Flag" className="w-10 mr-12" />

      </div>
      <div className="flex max-sm:w-24 w-40">
        {scores.map((score, index) => (

          <div className='max-sm:w-4'>
            <Table >
              <TableRow>
                <TableCell className="mr-2" key={index}>{score}</TableCell>
              </TableRow>
            </Table>
          </div>

        ))}

      </div>
    </div>
  )
}

export default Player;