import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const DoubleMatchCard = ({ match }) => {
    // Check if match object or pair1 or pair2 arrays are undefined
    if (!match || !match.pair1 || !match.pair2) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body1">
                        No match data available.
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {match.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                    {match.venue}
                </Typography>
                <Box my={2}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        {/* Team Flags and Score */}
                        <Grid item xs={5} container alignItems="center">
                            <img src={match.pair1[0].avatar} alt={match.pair1[0].country} style={{ width: 32, height: 32, marginRight: 8 }} />
                            <img src={match.pair1[1].avatar} alt={match.pair1[1].country} style={{ width: 32, height: 32 }} />
                        </Grid>
                        <Grid item xs={2} container direction="column" alignItems="center">
                            <Typography variant="body1">
                                {match.scores}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} container alignItems="center" justifyContent="flex-end">
                            <img src={match.pair2[0].avatar} alt={match.pair2[0].country} style={{ width: 32, height: 32, marginRight: 8 }} />
                            <img src={match.pair2[1].avatar} alt={match.pair2[1].country} style={{ width: 32, height: 32 }} />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" alignItems="center" mt={2}>
                        {/* Pair 1 */}
                        <Grid item xs={5} container spacing={1} alignItems="center">
                            {match.pair1.map((player, index) => (
                                <Grid key={index} item xs={6} container alignItems="center">
                                    <Typography variant="body2">
                                        {player.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={2} container direction="column" alignItems="center">
                            <Typography variant="body2" color="textSecondary">
                                {match.details}
                            </Typography>
                        </Grid>
                        {/* Pair 2 */}
                        <Grid item xs={5} container spacing={1} alignItems="center" justifyContent="flex-end">
                            {match.pair2.map((player, index) => (
                                <Grid key={index} item xs={6} container alignItems="center" justifyContent="flex-end">
                                    <Typography variant="body2">
                                        {player.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default DoubleMatchCard;
