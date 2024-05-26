import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import './matches.css';

const Matches = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [dayFilter, setDayFilter] = useState('day1');

  const matches = [
    {
      id: 1,
      title: "Girls Team - Under 19",
      venue: "Table 2",
      score: '0-3',
      day: 'day1',
      teams: {
        team1: { name: 'BANGLADESH', flag: '/images/images (2).png' },
        team2: { name: 'INDIA', flag: '/images/images (1).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Khoi Sai',
            status: 'lose'
          },
          player2: {
            avatar: '/images/images (1).png',
            name: 'Sayali Rajesh',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11, 3-11, 5-11'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Samanta Hossain',
            status: 'lose'
          },
          player2: {
            avatar: '/images/images (1).png',
            name: 'Pritha Priya',
            status: 'win'
          },
          scores: '0-3',
          details: '5-11, 4-11, 10-12'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Rashmi Tanchangya',
            status: 'lose'
          },
          player2: {
            avatar: '/images/images (1).png',
            name: 'Taneesha Sanjay',
            status: 'win'
          },
          scores: '0-3',
          details: '7-11, 4-11, 9-11'
        }
      ]
    },
    {
      id: 2,
      title: "Boys Team - Under 15",
      venue: "Table 1",
      score: '3-0',
      day: 'day1',
      teams: {
        team1: { name: 'INDIA', flag: '/images/images (1).png' },
        team2: { name: 'BANGLADESH', flag: '/images/images (2).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'MD Tahmidur Rahman',
            status: 'lose'
          },
          scores: '3-1',
          details: '11-13, 11-02, 11-05, 11-06'
        },
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Soham Mukherjee',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Abul Hashem Hasib',
            status: 'lose'
          },
          scores: '3-1',
          details: '08-11, 11-03, 11-06, 11-09'
        },
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sahil Rawat',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'MD Monirul Islam',
            status: 'lose'
          },
          scores: '3-0',
          details: '13-11, 11-05, 11-05'
        }
      ]
    },{
      id: 3,
      title: "Girls team - Under 19",
      venue: "Table  3",
      score: '3-0',
      day: 'day1',
      teams: {
        team1: { name: 'Sri', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'Mal', flag: '/images/teams/flags/images (2).png' },

      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Bimandee Bandara',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Minha Mahjoob Shujau',
            status: 'loss'
          },
          scores: '03-00',
          details: '11-07, 11-07, 11-06'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Tamadi Kavindya',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Fathimath Dheema Alu',
            status: 'win'
          },
          scores: '02-03',
          details: '11-06, 11-07, 11-08'
        },    
            {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Divya Dharani',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Mishka mohamed Ibrahim',
            status: 'loss'
          },
          scores: '03-00',
          details: '11-06, 11-07, 11-08'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Binamdee Bandara',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'fathimath Dheema Ali',
            status: 'loss'
          },
          scores: '02-03',
          details: '05-11, 11-06, 11-06,05-11,07-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Thamadi Kavinndya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Minha mahjoob Shujau',
            status: 'loss'
          },
          scores: '03-00',
          details: '13-11, 12-10, 11-05'
        },

      ]
    },{
      id: 4,
      title: "Boys team - Under 19",
      venue: "Table 3",
      score: '3-0',
      day: 'day1',
      teams: {
        team1: { name: 'IND', flag: '/images/images (1).png' },
        team2: { name: 'BAN', flag: '/images/images (2).png' },

      },
      players: [
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Tahmidur Rahman',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-13,11-2,11-5,11-9'
        },
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Soham Mukherjee',
            status: 'loss'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Abul Hashem',
            status: 'win'
          },
          scores: '3-1',
          details: '8-11,11-3,11-6,11-9'
        },    
            {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sahil Rawat',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Monirul Islam',
            status: 'loss'
          },
          scores: '3-0',
          details: '13-11,11-5,11-5'
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
                          {pair.player1.status === 'win' && <span className="text-green-500"> ✔</span>}
                        </Typography>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img src={pair.player2.avatar} alt={pair.player2.name} className="w-6 h-6" />
                        <Typography variant="body2" className="text-sm">
                          {pair.player2.name}
                          {pair.player2.status === 'win' && <span className="text-green-500"> ✔</span>}
                        </Typography>
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
