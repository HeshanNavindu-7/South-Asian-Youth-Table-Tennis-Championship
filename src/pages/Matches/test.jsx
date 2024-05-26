import { Button } from '@mui/material';
import React, { useState } from 'react';
import './matches.css';

const Test = () => {
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

    const filteredMatches = filter === 'all' ? matches : matches.filter(match => match.title.includes(filter));

    return (
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
            <div>
                <div className="card w-50 h-52 bg-white " style={{ width: "400px" }}>
                    <div className=' flex flex-wrap items-center justify-between p-4'>
                        <h2 className=' text-center'> Girls - Under 15 -team</h2>
                    </div>
                    <hr />
                    <div className=' flex flex-wrap items-center justify-between p-4'>
                        <img src="./images/teams/flags/bd.png" width="50px" alt="" />
                        <h2 className=' font-bold text-3xl text-red-500'>0-3</h2>
                        <img src="./images/teams/flags/images (1).png" width="50px" alt="" />
                    </div>
                    <hr />

                </div>

            </div>

        </div>

    );
};

export default Test;