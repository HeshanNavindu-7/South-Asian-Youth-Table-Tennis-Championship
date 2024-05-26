import { Button, Card, CardContent, Grid, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import './matches.css';

const Matches = () => {
  const [category, setCategory] = useState('all');
  const [ageRange, setAgeRange] = useState('all');
  const [matchType, setMatchType] = useState('all');
  const [dayFilter, setDayFilter] = useState('day1');

  const matches = [
    {
      id: 1,
      title: "Girls Team - Under 19",
      venue: "Table 2",
      score: '0-3',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'BAN', flag: '/images/bd.png' },
        team2: { name: 'IND', flag: '/images/images (1).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/bd.png',
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
            avatar: '/images/bd.png',
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
            avatar: '/images/bd.png',
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
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'IND', flag: '/images/images (1).png' },
        team2: { name: 'BAN', flag: '/images/bd.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/bd.png',
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
            avatar: '/images/bd.png',
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
            avatar: '/images/bd.png',
            name: 'MD Monirul Islam',
            status: 'lose'
          },
          scores: '3-0',
          details: '13-11, 11-05, 11-05'
        }
      ]
    },
    {
      id: 3,
      title: "Girls Team - Under 19",
      venue: "Table 3",
      score: '3-2',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'MAL', flag: '/images/teams/flags/images (2).png' }
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
            name: 'Fathimath Dheema Ali',
            status: 'loss'
          },
          scores: '02-03',
          details: '05-11, 11-06, 11-06, 05-11, 07-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Thamadi Kavinndya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Minha Mahjoob Shujau',
            status: 'loss'
          },
          scores: '03-00',
          details: '13-11, 12-10, 11-05'
        }
      ]
    },
    {
      id: 4,
      title: "Boys Team - Under 19",
      venue: "Table 3",
      score: '3-0',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'IND', flag: '/images/images (1).png' },
        team2: { name: 'BAN', flag: '/images/bd.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Tahmidur Rahman',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-13, 11-2, 11-5, 11-9'
        },
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Soham Mukherjee',
            status: 'win'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Abul Hashem',
            status: 'loss'
          },
          scores: '3-1',
          details: '8-11, 11-3, 11-6, 11-9'
        },
        {
          player1: {
            avatar: '/images/images (1).png',
            name: 'Sahil Rawat',
            status: 'win'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Monirul Islam',
            status: 'loss'
          },
          scores: '3-0',
          details: '13-11, 11-5, 11-5'
        }
      ]
    },
    {
      id: 5,
      title: "Boys Team - Under 15",
      venue: "Table 5",
      score: '3-2',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'PAK', flag: '/images/teams/flags/images.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abdal Muhammad Khan',
            status: 'win'
          },
          scores: '02-03',
          details: '11-05, 05-11, 11-05, 06-11, 08-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abbas Amjad Khan',
            status: 'loss'
          },
          scores: '03-02',
          details: '09-11, 11-04, 12-10, 08-11, 11-07'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Agasthy Ananditha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Noor Khan',
            status: 'loss'
          },
          scores: '03-01',
          details: '11-04, 11-04, 05-11, 11-09'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abbas Amjad Khan',
            status: 'win'
          },
          scores: '02-03',
          details: '11-06, 09-11, 12-10, 07-11, 06-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abdal Muhammad Khan',
            status: 'loss'
          },
          scores: '03-02',
          details: '07-11, 11-04, 11-08, 11-02'
        }
      ]
    },
    {
      id: 6,
      title: "Girls Team - Under 19",
      venue: "Table 4",
      score: '3-0',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'IND', flag: '/images/teams/flags/images (1).png' },
        team2: { name: 'PAK', flag: '/images/teams/flags/images.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Sayali Rajesh Wani',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Kalsoom Khan',
            status: 'loss'
          },
          scores: '03-01',
          details: '11-06, 11-04, 11-05'
        },
        {
          player1: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Pritha priya vartikar',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Hoor Fawad',
            status: 'loss'
          },
          scores: '03-01',
          details: '11-06, 11-03, 11-01'
        },
        {
          player1: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Risha Mirchandani',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Zunaira Khan',
            status: 'loss'
          },
          scores: '03-01',
          details: '11-02, 11-04, 11-05'
        },

      ]
    },
    {
      id: 7,
      title: "Girls Team - Under 15",
      venue: "Table 4",
      score: '0-3',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'NEP', flag: '/images/1f1f3-1f1f5.jpg' },
        team2: { name: 'IND', flag: '/images/teams/flags/images (1).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Sherestha',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Divyanshe',
            status: 'win'
          },
          scores: '0-3',
          details: '06-11,06-11, 06-11'
        },
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Shakya',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Syndrela',
            status: 'win'
          },
          scores: '0-3',
          details: '04-11,03-11, 06-11'
        },
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Mahata',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Kavya',
            status: 'win'
          },
          scores: '0-3',
          details: '0-11,04-11, 04-11'
        },



      ]
    },
    {
      id: 10,
      title: "Girls Team - Under 15",
      venue: "Table 4",
      score: '3-0',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'SRI', flag: '/images/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'BAN', flag: '/images/teams/flags/bd.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Yoshini Jayawardana',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'MSI Haniba Khaan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-06,11-05, 11-05'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Mithuli Shanya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Msiasma Khaan',
            status: 'loss'
          },
          scores: '3-0',
          details: '12-10,11-04, 11-04'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Samindi Weerasooriya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'nusai Jahan Ananna',
            status: 'loss'
          },
          scores: '3-0',
          details: '12-10,11-04, 11-04'
        },




      ]
    },
    {
      id: 11,
      title: "Boys Team - Under 15",
      venue: "Table 4",
      score: '0-3',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'NEP', flag: '/images/1f1f3-1f1f5.jpg' },
        team2: { name: 'IND', flag: '/images/teams/flags/images (1).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Jayashinu Maharjan',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Sahil Rawat',
            status: 'win'
          },
          scores: '0-3',
          details: '08-11,11-13, 02-11'
        },
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Rijan Shakya',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          scores: '0-3',
          details: '06-11,03-11, 06-11'
        },
        {
          player1: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Sabin Chhetri',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (1).png',
            name: 'Sardar Rumpam',
            status: 'win'
          },
          scores: '0-3',
          details: '5-11,09-11, 06-11'
        },



      ]
    },
    {
      id: 12,
      title: "Girls Team - Under 19",
      venue: "Table 4",
      score: '2-3',

      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'MAL', flag: '/images/images (2).png' },
        team2: { name: 'NEP', flag: '/images/1f1f3-1f1f5.jpg' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Fathimath Dheema Ali',
            status: 'win'
          },
          player2: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Bianca Rai',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-03,11-05, 11-08'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Mishka Mohomed Ibrahim',
            status: 'loss'
          },
          player2: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Evana Thapa magar',
            status: 'win'
          },
          scores: '0-3',
          details: '06-11,09-11, 08-11'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Minha mahjoob Shuiau',
            status: 'loss'
          },
          player2: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Yanggi Paudel',
            status: 'win'
          },
          scores: '0-3',
          details: '10-12,10-12, 07-11'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Fathimath Dheema Ali',
            status: 'win'
          },
          player2: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Evana Thapa Magar',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-02,11-06, 11-03'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Mishka Mohomed',
            status: 'loss'
          },
          player2: {
            avatar: '/images/1f1f3-1f1f5.jpg',
            name: 'Bianca Rai',
            status: 'win'
          },
          scores: '0-3',
          details: '09-11,08-11, 07-11'
        },




      ]
    },
    {
      id: 13,
      title: "Boys Team - Under 15",
      venue: "Table 4",
      score: '3-0',

      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'SRI', flag: '/images/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'MAL', flag: '/images/images (2).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian bojith',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Mohamed Khalaf Rafiu',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-04,11-04, 11-05'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethitha',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Umyr Mohamed Muizzu',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-05,05-11, 11-09,12-10'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Senul Rathnayake',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Yazeen Hussian Shareef',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-03,11-01, 11-03'
        },





      ]
    },
  ];


  const filteredMatches = matches.filter(match => {
    const categoryMatch = category === 'all' || match.title.toLowerCase().includes(category.toLowerCase());
    const ageRangeMatch = ageRange === 'all' || match.ageRange === ageRange;
    const matchTypeMatch = matchType === 'all' || match.matchType.toLowerCase() === matchType.toLowerCase();
    return categoryMatch && ageRangeMatch && matchTypeMatch;
  });

  const handleCategoryChange = (category) => () => setCategory(category);
  const handleAgeRangeChange = (event) => setAgeRange(event.target.value);
  const handleMatchTypeChange = (event) => setMatchType(event.target.value);

  return (
    <div className="m-8">
      <div className="filter-buttons">
        <Button variant="contained" color="error" onClick={handleCategoryChange('all')}>All</Button>
        <Button variant="contained" color="error" onClick={handleCategoryChange('Girls')}>Girls</Button>
        <Button variant="contained" color="error" onClick={handleCategoryChange('Boys')}>Boys</Button>
        <Select
          value={ageRange}
          onChange={handleAgeRangeChange}
          displayEmpty
          sx={{ backgroundColor: "white", marginLeft: '10px', marginRight: '10px' }}
        >
          <MenuItem value="all">
            <em>Age Group</em>
          </MenuItem>
          <MenuItem value="Under 15">Under 15</MenuItem>
          <MenuItem value="Under 19">Under 19</MenuItem>
        </Select>
        <Select
          value={matchType}
          onChange={handleMatchTypeChange}
          displayEmpty
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem value="all">
            <em>Match Type</em>
          </MenuItem>
          <MenuItem value="Team">Team</MenuItem>
          <MenuItem value="Singles">Singles</MenuItem>
          <MenuItem value="Doubles">Doubles</MenuItem>
          <MenuItem value="Mixed Doubles">Mixed Doubles</MenuItem>
        </Select>
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
                    <div className="text-center">
                      <Typography variant="body2">
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
