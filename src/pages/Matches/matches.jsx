// src/pages/AboutPage.jsx
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Matches = () => {

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>

      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
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
                <img className=' max-sm:w-96 max-sm:mt-40 max-md:w-72 max-lg:w-80 max-2xl:w-96 2xl:w-96 ' src="https://images.cricket.com/players/3355_headshot_safari.png" />
              </div>

              <div className="box max-sm:w-96 bg-black w-full">

                <p className='max-sm:absolute max-sm:top-48 max-md:relative max-md:top-28 max-sm:left-4 max-sm:mt-40 max-sm:text-4xl max-md:w-96 max-sm:w-88 max-sm:left-20 text-white text-center text-3xl m-5 lg:relative top-28'>MIXED - Round 01</p>
                <h3 className=' max-sm:mt-64   max-sm:text-4xl max-sm:w-24 max-sm:m-auto max-sm:mt-52 text-white text-center text-7xl font-bold m-32 lg:relative top-10'> <span>0</span> - <span>3</span> </h3>
                <div className="max-2xl:-mt-14 dis font-bold text-white flex m-10 text-3xl justify-center">
                  <div className=" lg:m-10 max-lg:font-normal max-sm:text-xl max-md:text-xl max-md:font-normal max-sm:font-normal max-md:absolute max-md:left-10  max-sm:absolute max-sm:left-5 max-sm:mt-52 max-md:mt-0 team1">
                    <h2 className='m-2'>sdfsdf fsdfsdfsf</h2>
                    <h2 className='m-2'>sdfsdf fsdfsdfsf</h2>
                  </div>
                  <div className="lg:m-10 max-lg:font-normal max-sm:text-xl max-md:text-xl max-md:font-normal max-sm:font-normal max-md:absolute max-md:right-10  max-sm:absolute max-sm:right-5 max-sm:mt-52 max-md:mt-0 team1">
                    <h2 className='m-2'>sdfsdf fsdfsdfsf</h2>
                    <h2 className='m-2'>sdfsdf fsdfsdfsf</h2>
                  </div>
                </div>
              </div>
              <div className="box mt-10">
                <img className=' max-sm:w-96 max-sm:mt-40 max-md:w-72  max-lg:w-80 max-2xl:w-96 2xl:w-96 ' src="https://images.cricket.com/players/3355_headshot_safari.png" />
              </div>
            </div>


          </div>

        </Dialog>
      </React.Fragment>
    </>
  );
};

export default Matches;
