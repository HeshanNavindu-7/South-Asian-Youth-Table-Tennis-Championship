import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
// import './matches.css';

const TeamMatchCard = ({ match }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" className="text-center">
                    {match.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="text-center mb-2">
                    {match.venue}
                </Typography>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col items-center text-center">
                        <img src={match.teams.team1.flag} alt={match.teams.team1.name} className="w-8 h-8 mb-1" />
                        <Typography variant="body2" component="div">
                            {match.teams.team1.name}
                        </Typography>
                    </div>
                    <Typography variant="body2" component="div" className="font-bold">
                        {match.score}
                    </Typography>
                    <div className="flex flex-col items-center text-center">
                        <img src={match.teams.team2.flag} alt={match.teams.team2.name} className="w-8 h-8 mb-1" />
                        <Typography variant="body2" component="div">
                            {match.teams.team2.name}
                        </Typography>
                    </div>
                </div>
                <hr />
                {match.players.map((pair, index) => (
                    <div key={index} className="flex justify-between items-center my-2">
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-1">
                                <img src={pair.player1.avatar} alt={pair.player1.name} className="w-5 h-5" />
                                <Typography variant="body2" className="text-xs">
                                    {pair.player1.name}
                                    {pair.player1.status === 'win' && <span className="text-green-500"> ✔</span>}
                                </Typography>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img src={pair.player2.avatar} alt={pair.player2.name} className="w-5 h-5" />
                                <Typography variant="body2" className="text-xs">
                                    {pair.player2.name}
                                    {pair.player2.status === 'win' && <span className="text-green-500"> ✔</span>}
                                </Typography>
                            </div>
                        </div>
                        <div className="text-right">
                            <Typography variant="body1" className="text-xs">
                                {pair.scores}
                            </Typography>
                            <Typography variant="paragraph" color="textSecondary" className="text-xs">
                                {pair.details}
                            </Typography>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TeamMatchCard;
