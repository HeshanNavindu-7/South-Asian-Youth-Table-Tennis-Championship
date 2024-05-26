import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Card, CardContent, Dialog, Grid, IconButton, Slide, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Player from '../../components/Matchplayers/Player';
import './matches.css';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));


const Matches = () => {
  const [open, setOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [filter, setFilter] = useState('all');

  const matches = [
    {
      id: 1,
      title: "Girls - under 19 - Team ",
      score: '0-0',
      players: [
        {
          avatar: '/images/teams/flags/images (1).pn',
          name: 'Rafael Turrini',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/teams/flags/images (1).png',
          status: 'lose'
        },
        {
          avatar: '/image/pic4.jpeg',
          name: 'Lubomir Pistej',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/teams/flags/bd.png',
          status: 'wi'
        }
      ]
    },
    {
      id: 2,
      title: "Pending",
      score: 'pending',
      players: [
        {
          avatar: '/image/pic4.jpeg',
          name: 'Rafael Turrini',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'lose'
        },
        {
          avatar: '/image/pic4.jpeg',
          name: 'Lubomir Pistej',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'wi'
        }
      ]
    },
    {
      id: 3,
      title: "Pending",
      score: 'pending',
      players: [
        {
          avatar: '/image/pic4.jpeg',
          name: 'Rafael Turrini',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'lose'
        },
        {
          avatar: '/image/pic4.jpeg',
          name: 'Lubomir Pistej',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'wi'
        }
      ]
    },
    {
      id: 4,
      title: "Pending",
      score: 'pending',
      players: [
        {
          avatar: '/image/pic4.jpeg',
          name: 'Rafael Turrini',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'lose'
        },
        {
          avatar: '/image/pic4.jpeg',
          name: 'Lubomir Pistej',
          scores: [0, 0, 0, 0, 0, 0],
          countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
          status: 'wi'
        }
      ]
    },

    // {
    //   id: 4,
    //   title: "Boys - Under 19 Team",
    //   score: 'pending',
    //   players: [
    //     {
    //       avatar: '/image/pic4.jpeg',
    //       name: 'Rafael Turrini',
    //       scores: [2, 11, 6, 14, 10, 7],
    //       countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
    //       status: 'lose'
    //     },
    //     {
    //       avatar: '/image/pic4.jpeg',
    //       name: 'Lubomir Pistej',
    //       scores: [3, 3, 11, 12, 12, 11],
    //       countryFlag: '/images/Flag_of_Sri_Lanka.svg.png',
    //       status: 'wi'
    //     }
    //   ]
    // },



  ];

  const handleView = (match) => (e) => {
    e.preventDefault();
    console.log(match)
    setSelectedMatch(match);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMatch(null);
  };

  const filteredMatches = filter === 'all' ? matches : matches.filter(match => match.title.includes(filter));

  return (
    <>
      <div className="m-8">
        <div className="filter-buttons">
          <Button variant="contained" color="error" onClick={() => setFilter('all')}>All</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Girls")}>Girls</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Boys")}>Boys</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Under 15")}>Under 15</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Under 19")}>Under 19</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Team")}>Team</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Single")}>Single</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("double")}>Double</Button>
          <Button variant="contained" color="error" onClick={() => setFilter("Mix-Double")}>Mix-Double</Button>
        </div>
        <Grid container spacing={3} justifyContent="center">
          {filteredMatches.map((match) => (
            <Grid item xs={12} sm={6} md={5} key={match.id}>
              <Card>
                <CardContent>
                  <div className='row p-2' style={{ borderBottom: "3px red solid" }}>
                    <Typography variant="h5" component="div">
                      <span className='text-xl font-bold'>{match.title}</span>
                    </Typography>
                    <div className='right-side-score text-4xl font-bold'>
                      {match.score}
                    </div>
                  </div>

                  <form onSubmit={handleView(match)}>
                    <div className='ml-16'>
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
                      <Button type='submit' variant="contained" color="error" className="mt-4 relative -left-7 top-2">
                        View Match Details
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {selectedMatch &&
        <div className='w-full'>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className=''
          >
            <AppBar sx={{ position: 'relative', backgroundColor: "red" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Back
                </Typography>

              </Toolbar>
            </AppBar>
            <div className='bg-black text-white'>
              <img className='m-auto' src="./images/a.png" width="300px" alt="" />
              <h2 className='font-bold text-2xl text-center'>SOUTH ASIAN YOUTH TABLE TENNIS CHAMPIONSHIP-2024</h2>
              <h3 className=' text-xl text-center lg:relative top-10'>{selectedMatch.title}</h3>
              <div className=' flex w-fit m-auto'>
                <div>
                  <div className="box img lg:w-72 m-10 lg:relative -left-28">
                    <img src={selectedMatch.players[0].avatar} alt="" className=' shadow-red-50 shadow-2xl rounded-full' />
                  </div>
                  <h2 className='flex m-10 lg:relative -top-52 left-48'> <span><img width="50px" className='m-3' src={selectedMatch.players[0].countryFlag} alt="" /></span> <span className=' m-2 text-2xl font-bold'>{selectedMatch.players[0].name}</span></h2>
                </div>
                <div className='lg:p-32 lg:text-5xl text-3xl max-sm:mt-14 font-bold'>
                  <span>{selectedMatch.score}</span>
                </div>
                <div>
                  <div className="img lg:w-72 m-10 img lg:w-72 m-10 lg:relative -right-28">
                    <img src={selectedMatch.players[1].avatar} alt="" className=' rounded-full shadow-red-50 shadow-2xl' />
                  </div>
                  <h2 className='flex m-10 lg:relative -top-52 right-48'> <span className='m-2 text-2xl font-bold'>{selectedMatch.players[1].name}</span> <span><img width="50px" className='m-3' src="./images/bd.png" alt="" /></span></h2>
                </div>
              </div>
            </div>
            <div className=' bg-white w-full '>
              <h2 className=' text-center m-2 text-3xl font-bold'>Match status </h2>
              <TableContainer>
                <Table sx={{ width: 850, margin: "auto", backgroundColor: "white", boxShadow: "0px 0px 10px #bebebe", borderRadius: "20px", marginTop: "20px" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h2 className='flex m-2 lg:relative'> <span><img width="30px" className='m-3' src={selectedMatch.players[0].avatar} alt="" /></span> <span className='m-2 text-lg'>{selectedMatch.players[0].name}</span></h2>
                      </TableCell>

                      {selectedMatch.players[0].scores.map((data, index) => (
                        <TableCell key={index}>{data}</TableCell>
                      )
                      )}


                    </TableRow>
                  </TableHead>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h2 className='flex m-2 lg:relative'> <span><img width="30px" className='m-3' src={selectedMatch.players[1].avatar} alt="" /></span> <span className='m-2 text-lg'>{selectedMatch.players[1].name}</span></h2>
                      </TableCell>

                      {selectedMatch.players[1].scores.map((data, index) => (
                        <TableCell key={index}>{data}</TableCell>
                      )
                      )}
                    </TableRow>
                  </TableHead>

                </Table>
              </TableContainer>



            </div>

          </Dialog>
        </div>
      }
    </>
  );
};

export default Matches;
