import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import './matches.css';

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
            avatar: '/images/japan_flag.png',
            name: 'HAYATA Hina',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'RAKOVAC Lea',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-4, 11-6, 11-7, 0-0, 0-0'
        },
        {
          player1: {
            avatar: '/images/japan_flag.png',
            name: 'HARIMOTO Miwa',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'ARAPOVIC Hana',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-7, 11-4, 11-5, 0-0, 0-0'
        },
        {
          player1: {
            avatar: '/images/japan_flag.png',
            name: 'HIRANO Miu',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'JEGER Mateja',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-1, 11-4, 11-0, 0-0, 0-0'
        }
      ]
    },
    {
      id: 2,
      title: "Boys's Teams - Round of 16",
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
            avatar: '/images/japan_flag.png',
            name: 'HAYATA Hina',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'RAKOVAC Lea',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-4, 11-6, 11-7, 0-0, 0-0'
        },
        {
          player1: {
            avatar: '/images/japan_flag.png',
            name: 'HARIMOTO Miwa',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'ARAPOVIC Hana',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-7, 11-4, 11-5, 0-0, 0-0'
        },
        {
          player1: {
            avatar: '/images/japan_flag.png',
            name: 'HIRANO Miu',
            status: 'win'
          },
          player2: {
            avatar: '/images/croatia_flag.png',
            name: 'JEGER Mateja',
            status: 'lose'
          },
          scores: '3-0',
          details: '11-1, 11-4, 11-0, 0-0, 0-0'
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
        <Button variant="contained" color="error" onClick={() => setTypeFilter('all')}>All</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Girls")}>Girls</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Boys")}>Boys</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Under 15")}>Under 15</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Under 19")}>Under 19</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Team")}>Team</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Single")}>Single</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("double")}>Double</Button>
        <Button variant="contained" color="error" onClick={() => setTypeFilter("Mix-Double")}>Mix-Double</Button>
      </div>

      <Typography variant="h4" align="center" gutterBottom>
        {dayFilter.charAt(0).toUpperCase() + dayFilter.slice(1).replace('day', 'Day ')}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {filteredMatches.map((match) => (
          <Grid item xs={12} sm={8} md={6} key={match.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" className="text-center">
                  {match.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="text-center mb-4">
                  {match.venue}
                </Typography>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center text-center">
                    <img src={match.teams.team1.flag} alt={match.teams.team1.name} className="w-10 h-10 mb-2" />
                    <Typography variant="h6" component="div">
                      {match.teams.team1.name}
                    </Typography>
                  </div>
                  <Typography variant="h6" component="div" className="font-bold">
                    {match.score}
                  </Typography>
                  <div className="flex flex-col items-center text-center">
                    <img src={match.teams.team2.flag} alt={match.teams.team2.name} className="w-10 h-10 mb-2" />
                    <Typography variant="h6" component="div">
                      {match.teams.team2.name}
                    </Typography>
                  </div>
                </div>
                <hr />
                {match.players.map((pair, index) => (
                  <div key={index} className="flex justify-between items-center my-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <img src={pair.player1.avatar} alt={pair.player1.name} className="w-6 h-6" />
                        <Typography variant="body2" className="text-sm">
                          {pair.player1.name}
                        </Typography>
                        {pair.player1.status === 'win' && <span className="text-green-500">✔</span>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <img src={pair.player2.avatar} alt={pair.player2.name} className="w-6 h-6" />
                        <Typography variant="body2" className="text-sm">
                          {pair.player2.name}
                        </Typography>
                        {pair.player2.status === 'lose' && <span className="text-red-500">✘</span>}
                      </div>
                    </div>
                    <div className="text-right">
                      <Typography variant="body2" className="font-bold">
                        {pair.scores}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {pair.details}
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
