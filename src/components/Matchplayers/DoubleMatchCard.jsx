import { Card, CardContent, Typography } from '@mui/material';
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
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" className="text-center">
                    {match.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="text-center mb-2">
                    {match.venue}
                </Typography>
                <div className="flex justify-between items-center my-2">
                    {/* Pair 1 */}
                    <div className="flex items-center space-x-2">
                        {match.pair1.map((player, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <img src={player.avatar} alt={player.name} className="w-8 h-8" />
                                <Typography variant="body2" className="text-xs">
                                    {player.name}
                                </Typography>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Typography variant="body1" className="text-xs">
                            {match.scores}
                        </Typography>
                        <Typography variant="paragraph" color="textSecondary" className="text-xs">
                            {match.details}
                        </Typography>
                    </div>
                    {/* Pair 2 */}
                    <div className="flex items-center space-x-2">
                        {match.pair2.map((player, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Typography variant="body2" className="text-xs">
                                    {player.name}
                                </Typography>
                                <img src={player.avatar} alt={player.name} className="w-8 h-8" />
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DoubleMatchCard;
