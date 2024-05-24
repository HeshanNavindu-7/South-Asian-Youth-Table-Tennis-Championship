import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Card, CardContent, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from '@mui/material';
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
                  <form onSubmit={handleView(match)}>
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
                      <Button type='submit' variant="contained" color="error" className="mt-4">
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
                Score
              </Typography>

            </Toolbar>
          </AppBar>
          <div className='w-full bg-black max-sm:absolute overflow-hidden -mt-20' >
            <h2 className=' max-sm:relative max-md:relative max-md:top-40 text-center text-5xl font-bold lg:relative top-48 text-white'>TENNISE COMPITION</h2>
            <div className=' flex max-sm:w-fit bg-black m-auto mt-28' style={{ height: "800px", }} >
              <div className="box mt-10">
                <img className=' max-sm:w-96 max-sm:mt-40 max-md:w-72 max-lg:w-80 max-2xl:w-96 2xl:w-96 ' src={selectedMatch.players[0].avatar} />
              </div>

              <div className="box max-sm:w-96 bg-black w-full">

                <p className='max-sm:absolute max-sm:top-48 max-md:relative max-md:top-28 max-sm:left-4 max-sm:mt-40 max-sm:text-4xl max-md:w-96 max-sm:w-88 max-sm:left-20 text-white text-center text-3xl m-5 lg:relative top-28'>{selectedMatch.title}</p>
                <h3 className=' max-sm:mt-64   max-sm:text-4xl max-sm:w-24 max-sm:m-auto max-sm:mt-52 text-white text-center text-7xl font-bold m-32 lg:relative top-10'> <span>{selectedMatch.score}</span> </h3>
                <div className="max-2xl:-mt-14 dis font-bold text-white flex m-10 text-3xl justify-center">
                  <div className=" lg:m-10 max-lg:font-normal max-sm:text-xl max-md:text-xl max-md:font-normal max-sm:font-normal max-md:absolute max-md:left-10  max-sm:absolute max-sm:left-5 max-sm:mt-52 max-md:mt-0 team1">
                    <h2 className='m-2'>{selectedMatch.players[0].name}</h2>
                  </div>
                  <div className="lg:m-10 max-lg:font-normal max-sm:text-xl max-md:text-xl max-md:font-normal max-sm:font-normal max-md:absolute max-md:right-10  max-sm:absolute max-sm:right-5 max-sm:mt-52 max-md:mt-0 team1">
                    <h2 className='m-2'>{selectedMatch.players[1].name}</h2>
                  </div>
                </div>
              </div>
              <div className="box mt-10">
                <img className=' max-sm:w-96 max-sm:mt-40 max-md:w-72  max-lg:w-80 max-2xl:w-96 2xl:w-96 ' src={selectedMatch.players[0].avatar} />
              </div>
            </div>


          </div>

        </Dialog>
      }
    </>
  );
};

export default Matches;
