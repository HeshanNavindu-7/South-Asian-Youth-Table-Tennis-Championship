import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const IndividualMatchCard = ({ match }) => {
    // Check if match object or players array is undefined
    if (!match || !match.players || !Array.isArray(match.players)) {
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
                    {match.title} - {match.scores}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="text-center mb-2">
                    {match.venue}
                </Typography>
                {match.players.map((player, index) => (
                    <div key={index} className="flex justify-between items-center my-2">
                        <div className="flex items-center space-x-2">
                            {player.avatar && (
                                <img src={player.avatar} alt={player.name} className="w-8 h-8" />
                            )}
                            <Typography variant="body2" className="text-xs">
                                {player.name}
                            </Typography>
                            {player.country && player.flag && (
                                <img src={player.flag} alt={player.country} className="w-5 h-5" />
                            )}
                        </div>
                        <div className="text-center">
                            <Typography variant="body1" className="text-xs">
                                {match.scores}
                            </Typography>
                            <Typography variant="paragraph" color="textSecondary" className="text-xs">
                                {match.details}
                            </Typography>
                        </div>
                        {/* No opponent for Singles match */}
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default IndividualMatchCard;
