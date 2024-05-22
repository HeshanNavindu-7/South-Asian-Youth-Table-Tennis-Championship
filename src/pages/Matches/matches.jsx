// src/Matches.js

import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

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
              <hr></hr>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Team Roles and Responsibilities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li><strong>Project Manager</strong>
                    <ul>
                      <li>Oversee project progress</li>
                      <li>Coordinate between teams</li>
                      <li>Manage timelines and resources</li>
                    </ul>
                  </li>
                  <li><strong>Lead Developer</strong>
                    <ul>
                      <li>Design and implement core features</li>
                      <li>Ensure code quality</li>
                      <li>Mentor junior developers</li>
                    </ul>
                  </li>
                  <li><strong>Quality Assurance</strong>
                    <ul>
                      <li>Develop and execute test plans</li>
                      <li>Identify and document bugs</li>
                      <li>Ensure product meets quality standards</li>
                    </ul>
                  </li>
                  <li><strong>UI/UX Designer</strong>
                    <ul>
                      <li>Create user interface designs</li>
                      <li>Conduct user experience research</li>
                      <li>Collaborate with developers for implementation</li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Matches;
