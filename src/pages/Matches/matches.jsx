import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import './matches.css';
import Player from '../../components/Matchplayers/Player';

const Matches = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [dayFilter, setDayFilter] = useState('day1');

  const matches = [
    {
      id: 1,
      title: "Women's Teams - Round of 16",
      venue: "BEXCO Convention Centre | Table 4",
      score: '3-0',
      day: 'day1',
      teams: {
        team1: { name: 'JPN', flag: '/images/japan_flag.png' },
        team2: { name: 'CRO', flag: '/images/croatia_flag.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/pic4.jpeg',
            name: 'HAYATA Hina',
            scores: '3-0',
            details: '11-4, 11-6, 11-7, 0-0, 0-0'
          },
          player2: {
            avatar: '/images/pic4.jpeg',
            name: 'RAKOVAC Lea',
            scores: '0-3',
            details: '4-11, 6-11, 7-11, 0-0, 0-0'
          }
        },
        {
          player1: {
            avatar: '/images/pic4.jpeg',
            name: 'HARIMOTO Miwa',
            scores: '3-0',
            details: '11-7, 11-4, 11-5, 0-0, 0-0'
          },
          player2: {
            avatar: '/images/pic4.jpeg',
            name: 'ARAPOVIC Hana',
            scores: '0-3',
            details: '7-11, 4-11, 5-11, 0-0, 0-0'
          }
        },
        {
          player1: {
            avatar: '/images/pic4.jpeg',
            name: 'HIRANO Miu',
            scores: '3-0',
            details: '11-1, 11-4, 11-0, 0-0, 0-0'
          },
          player2: {
            avatar: '/images/pic4.jpeg',
            name: 'JEGER Mateja',
            scores: '0-3',
            details: '1-11, 4-11, 0-11, 0-0, 0-0'
          }
        }
      ]
    }
  ];

  const filteredMatches = matches.filter(match =>
    (typeFilter === 'all' || match.title.includes(typeFilter)) &&
    match.day === dayFilter
  );

  return (
    <div className="m-8">
      <div className="filter-buttons">
        <Button variant="contained" onClick={() => setTypeFilter('all')}>All</Button>
        <Button variant="contained" onClick={() => setTypeFilter("Men's Singles")}>Men's Singles</Button>
        <Button variant="contained" onClick={() => setTypeFilter("Women's Singles")}>Women's Singles</Button>
      </div>
      <div className="filter-buttons">
        <Button variant="contained" onClick={() => setDayFilter('day1')}>Day 1</Button>
        <Button variant="contained" onClick={() => setDayFilter('day2')}>Day 2</Button>
        <Button variant="contained" onClick={() => setDayFilter('day3')}>Day 3</Button>
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        {dayFilter.charAt(0).toUpperCase() + dayFilter.slice(1).replace('day', 'Day ')}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {filteredMatches.map((match) => (
          <Grid item xs={12} sm={6} md={5} key={match.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {match.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {match.venue}
                </Typography>
                <div className="team-scores">
                  <div className="team">
                    <img src={match.teams.team1.flag} alt={match.teams.team1.name} className="team-flag" />
                    <Typography variant="h6" component="div">
                      {match.teams.team1.name}
                    </Typography>
                  </div>
                  <Typography variant="h6" component="div" className="match-score">
                    {match.score}
                  </Typography>
                  <div className="team">
                    <img src={match.teams.team2.flag} alt={match.teams.team2.name} className="team-flag" />
                    <Typography variant="h6" component="div">
                      {match.teams.team2.name}
                    </Typography>
                  </div>
                </div>
                <hr />
                {match.players.map((pair, index) => (
                  <div key={index} className="player-pair">
                    <div className="player-details">
                      <Player
                        avatar={pair.player1.avatar}
                        name={pair.player1.name}
                        scores={[pair.player1.scores]}
                        countryFlag={pair.player1.avatar}
                        status=""
                      />
                      <Typography variant="body2" color="textSecondary" className="player-score-details">
                        {pair.player1.details}
                      </Typography>
                    </div>
                    <div className="player-details">
                      <Player
                        avatar={pair.player2.avatar}
                        name={pair.player2.name}
                        scores={[pair.player2.scores]}
                        countryFlag={pair.player2.avatar}
                        status=""
                      />
                      <Typography variant="body2" color="textSecondary" className="player-score-details">
                        {pair.player2.details}
                      </Typography>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Matches;
