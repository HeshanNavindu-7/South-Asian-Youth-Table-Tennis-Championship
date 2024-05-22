// src/Matches.js

import React from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';

import './matches.css';
import Player from '../../components/Matchplayers/Player';

const Matches = () => {
  return (
    <div className="m-8">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            <CardContent>
              <div className='row'>
                <Typography variant="h5" component="div">
                  Men's Singles - Qualifying Round 2
                </Typography>
                <div className='right-side-score'>
                  2-3
                </div>
              </div>
              <hr />
              <div>
                <Player
                  avatar="/images/pic4.jpeg"
                  name="Rafael Turrini"
                  scores={[2, 11, 6, 14, 10, 7]}
                  countryFlag="/images/pic4.jpeg"
                  status="lose"
                />
                <Player
                  avatar="/images/pic4.jpeg"
                  name="Lubomir Pistej"
                  scores={[3, 3, 11, 12, 12, 11]}
                  countryFlag="/images/pic4.jpeg"
                  status="win"
                />
              </div>
              <Button variant="contained" color="primary" className="mt-4">
                View Match Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            <CardContent>
              <div className='row'>
                <Typography variant="h5" component="div">
                  Men's Singles - Qualifying Round 2
                </Typography>
                <div className='right-side-score'>
                  2-3
                </div>
              </div>
              <hr />
              <div>
                <Player
                  avatar="/images/pic4.jpeg"
                  name="Rafael Turrini"
                  scores={[2, 11, 6, 14, 10, 7]}
                  countryFlag="/images/pic4.jpeg"
                  status="lose"
                />
                <Player
                  avatar="/images/pic4.jpeg"
                  name="Lubomir Pistej"
                  scores={[3, 3, 11, 12, 12, 11]}
                  countryFlag="/images/pic4.jpeg"
                  status="win"
                />
              </div>
              <Button variant="contained" color="primary" className="mt-4">
                View Match Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Matches;
