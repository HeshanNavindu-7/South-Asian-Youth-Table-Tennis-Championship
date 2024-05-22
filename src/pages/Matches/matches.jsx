import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import './matches.css';
import Player from '../../components/Matchplayers/Player';

const Matches = () => {
  const [filter, setFilter] = useState('all');
  const matches = [
    {
      id: 1,
      title: "Men's Singles - Qualifying Round 2",
      score: '2-3',
      players: [
        {
          avatar: '/images/pic4.jpeg',
          name: 'Rafael Turrini',
          scores: [2, 11, 6, 14, 10, 7],
          countryFlag: '/images/pic4.jpeg',
          status: 'lose'
        },
        {
          avatar: '/images/pic4.jpeg',
          name: 'Lubomir Pistej',
          scores: [3, 3, 11, 12, 12, 11],
          countryFlag: '/images/pic4.jpeg',
          status: 'win'
        }
      ]
    },
    {
      id: 2,
      title: "Women's Singles - Qualifying Round 2",
      score: '1-3',
      players: [
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player A',
          scores: [2, 11, 6, 14],
          countryFlag: '/images/pic4.jpeg',
          status: 'lose'
        },
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player B',
          scores: [3, 3, 11, 12],
          countryFlag: '/images/pic4.jpeg',
          status: 'win'
        }
      ]
    },
    {
      id: 3,
      title: "Women's Singles - Qualifying Round 9",
      score: '1-3',
      players: [
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player A',
          scores: [2, 11, 6, 14],
          countryFlag: '/images/pic4.jpeg',
          status: 'lose'
        },
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player B',
          scores: [3, 3, 11, 12],
          countryFlag: '/images/pic4.jpeg',
          status: 'win'
        }
      ]
    },
    {
      id: 4,
      title: "Women's Singles - Qualifying Round 6",
      score: '1-3',
      players: [
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player A',
          scores: [2, 11, 6, 14],
          countryFlag: '/images/pic4.jpeg',
          status: 'lose'
        },
        {
          avatar: '/images/pic4.jpeg',
          name: 'Player B',
          scores: [3, 3, 11, 12],
          countryFlag: '/images/pic4.jpeg',
          status: 'win'
        }
      ]
    }
  ];

  const filteredMatches = filter === 'all' ? matches : matches.filter(match => match.title.includes(filter));

  return (
    <div className="m-8">
      <div className="filter-buttons">
        <Button variant="contained" color="error" onClick={() => setFilter('all')}>All</Button>
        <Button variant="contained" color="error" onClick={() => setFilter("Men's Singles")}>Men's Singles</Button>
        <Button variant="contained" color="error" onClick={() => setFilter("Women's Singles")}>Women's Singles</Button>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {filteredMatches.map((match) => (
          <Grid item xs={12} sm={6} md={5} key={match.id}>
            <Card>
              <CardContent>
                <div className='row'>
                  <Typography variant="h5" component="div">
                    {match.title}
                  </Typography>
                  <div className='right-side-score'>
                    {match.score}
                  </div>
                </div>
                <hr />
                <div>
                  {match.players.map((player, index) => (
                    <Player
                      key={index}
                      avatar={player.avatar}
                      name={player.name}
                      scores={player.scores}
                      countryFlag={player.countryFlag}
                      status={player.status}
                    />
                  ))}
                </div>
                <Button variant="contained" color="error" className="mt-4">
                  View Match Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Matches;
