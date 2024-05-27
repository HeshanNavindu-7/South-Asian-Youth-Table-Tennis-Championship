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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="h6" component="div">
                        {match.title}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
                        {match.score}
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                    {match.venue}
                </Typography>
                <hr />
                <Box my={2}>
                    <Grid container spacing={2} alignItems="center">
                        {/* Pair 1 */}
                        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                            <Grid item container xs={1} justifyContent="flex-start">
                                {match.pair1[3].status === 'win' && <span style={{ color: 'green' }}>✔</span>}
                            </Grid>
                            <Grid item container xs={1} justifyContent="flex-start">
                                <img src={match.pair1[2].flag} alt={match.pair1[0].country} style={{ width: 32, height: 32 }} />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    {match.pair1[0].country}
                                </Typography>
                                <Typography variant="body2">
                                    {match.pair1[4].name} / {match.pair1[5].name}
                                </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="body2" align="left">
                                    {match.pair1[1].scoreDetails}
                                </Typography>
                            </Grid>
                        </Grid>

                        {/* Pair 2 */}
                        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                            <Grid item container xs={1} justifyContent="flex-start">
                                {match.pair2[3].status === 'win' && <span style={{ color: 'green' }}>✔</span>}
                            </Grid>
                            <Grid item container xs={1} justifyContent="flex-start">
                                <img src={match.pair2[2].flag} alt={match.pair2[0].country} style={{ width: 32, height: 32 }} />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    {match.pair2[0].country}
                                </Typography>
                                <Typography variant="body2">
                                    {match.pair2[4].name} / {match.pair2[5].name}
                                </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="body2" align="left">
                                    {match.pair2[1].scoreDetails}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default DoubleMatchCard;
