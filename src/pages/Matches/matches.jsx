import { Button, Grid, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import DoubleMatchCard from '../../components/Matchplayers/DoubleMatchCard';
import IndividualMatchCard from '../../components/Matchplayers/IndividualMatchCard';
import TeamMatchCard from '../../components/Matchplayers/TeamMatchCard';
import './matches.css';

const Matches = () => {
  const [category, setCategory] = useState('all');
  const [ageRange, setAgeRange] = useState('all');
  const [matchType, setMatchType] = useState('all');
  const [day, setDay] = useState('all');

  const matches = [
    {

      // 1)id 1 Bangaladesh - India Under 19 Girls (3)
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
      // 2)id 2 boys uder 15 india - bangaladesh(3)
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
    {//id 6 under 19 girls(3)
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
      //  4)id 7 under 15 nep ind(3)
      id: 71,
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
      // 5)id 10 srilanka banga girls under 15(3)

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
      // 6)id 9 boya un der 19  pak  ban(3)
      id: 9,
      title: "Boys Team - Under 19",
      venue: "Table 4",
      score: '0-3',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'PAK', flag: '/images/images.png' },
        team2: { name: 'BAN', flag: '/images/teams/flags/bd.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images.png',
            name: 'Shayan ',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'MD Nafiz',
            status: 'win'
          },
          scores: '2-3',
          details: '09-11,11-13, 11-07, 11-06,11-13'
        },
        {

          player1: {
            avatar: '/images/images.png',
            name: 'Abbas ',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Pamhimlian',
            status: 'win'
          },
          scores: '1-3',
          details: '11-01,06-11, 07-11, 09-11'
        },
        {
          player1: {
            avatar: '/images/images.png',
            name: 'Taha Bilal ',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Abul',
            status: 'win'
          },
          scores: '1-3',
          details: '11-08,09-11, 08-11, 07-11'
        },





      ]
    },
    {
      // 7)id 7 boys under 15 nepal india(3)
      id: 7,
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
    ,
    {// 8)id 8 under 19 nepal boys(8)
      id: 8,
      title: "Boys Team - Under 19",
      venue: "Table 4",
      score: '3-0',
      day: 'day1',
      matchType: 'Team',
      teams: {
        team1: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' },
        team2: { name: 'MAL', flag: '/images/teams/flags/images (2).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Rubin',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Umir',
            status: 'loss'
          },
          scores: '3-2',
          details: '11-8,11-6,11-7'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Prince',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Akhyar',
            status: 'loss'
          },
          scores: '3-2',
          details: '6-11,9-11,11-8,11-9,15-13'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Siddharth',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Mohomed',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-4,11-4,11-4'
        }]
    },//start
    {
      //9)id 72 boys under 15 sl - mala(3)
      id: 72,
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
    //end

    //start
    {
      //10)id 16 boys under 15 sl - mala(3)
      id: 16,
      title: "Girls Team - Under 15",
      venue: "Table 2",
      score: '0-3',

      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'PAK', flag: '/images/teams/flags/pak.png' },
        team2: { name: 'IND', flag: '/images/teams/flags/ind.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Zunaira khan',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Kavya Pravin',
            status: 'win'
          },
          scores: '0-3',
          details: '3-11,4-11,2-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Fatima Danish',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Divyanshi Bhowmick',
            status: 'win'
          },
          scores: '0-3',
          details: '2-11,2-11,3-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Sara Danish',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Ankolika Charraborty',
            status: 'win'
          },
          scores: '0-3',
          details: '1-11,4-11,4-11'
        },





      ]
    },
    {
      //10)id 37 boys under 15 sl - mala(3)
      id: 37,
      title: "Boys Team - Under 19",
      venue: "Table 2",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'MAL', flag: '/images/images (2).png' },
        team2: { name: 'BAN', flag: '/images/bd.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Akhyar Ahmed',
            status: 'loss'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Nafiz Iqbal',
            status: 'win'
          },
          scores: '0-3',
          details: '8-11,1-11,4-11'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Umyr Mohoamed',
            status: 'loss'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Ramhimlian Bawm',
            status: 'win'
          },
          scores: '0-3',
          details: '4-11,8-11,1-11'
        },
        {
          player1: {
            avatar: '/images/images (2).png',
            name: 'Mohamed Aan',
            status: 'loss'
          },
          player2: {
            avatar: '/images/bd.png',
            name: 'Abul Hashem',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,6-11,9-11'
        },







      ]
    },
    //end
    {
      //11)id 17 girls under 15 sl - mala(3)
      id: 13,
      title: "Girls Team - Under 15",
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
            name: 'Yoshini Jayawardana',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Aishath Malak',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-05,11-05, 11-06'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Muthuli Shanya',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Aishath Alsaa',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-04,11-04, 11-04'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Melakya Frenando',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Mishka Binthi Muizzu',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-05,11-05, 11-03'
        },





      ]
    },
    //start
    {
      //12)id 19 girls under 19 sl - nepal(3)
      id: 19,
      title: "Girls Team - Under 19",
      venue: "Table 4",
      score: '3-0',

      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'SRI', flag: '/images/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' }
      },
      players: [
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Bimandee Bandara',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Bianca Rai',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-6,11-5,11-4'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Tamadi Kavindya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Evana Thapa',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-7,11-8,13-11'
        },
        {
          player1: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Divya Dharani',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Yanggi Paudel',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-8,8-11,11-4,11-6'
        },





      ]
    },
    //end

    //start
    {
      //13)id 21 Boyss under 15 mal  - pak(3)
      id: 21,
      title: "Boys Team - Under 15",
      venue: "Table 2",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'MAL', flag: '/images/teams/flags/mal.png' },
        team2: { name: 'PAK', flag: '/images/teams/flags/pak.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Mohomed Muizzu',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Muhammad Khan',
            status: 'win'
          },
          scores: '0-3',
          details: '4-11,6-11,6-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Kalaf Rafiu',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Amjad Khan',
            status: 'win'
          },
          scores: '0-3',
          details: '5-11,5-11,3-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Hussain Shareef',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Muhammad Azaan',
            status: 'win'
          },
          scores: '0-3',
          details: '7-11,5-11,6-11'
        },





      ]
    },
    {
      //13)id 38 Boyss under 15 mal  - pak(3)
      id: 38,
      title: "Girls Team - Under 15",
      venue: "Table 2",
      score: '3-0',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'BAN', flag: '/images/bd.png' },
        team2: { name: 'MAL', flag: '/images/images (2).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/bd.png',
            name: 'Asma Khatun',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Aishath Malak',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-6,6-11,11-6,12-10'
        },
        {
          player1: {
            avatar: '/images/bd.png',
            name: 'Nusrat Jahan',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Aishath Alsaa',
            status: 'loss'
          },
          scores: '3-2',
          details: '11-8,8-11,11-8,9-11,11-6'
        },
        {
          player1: {
            avatar: '/images/bd.png',
            name: 'Habiba Khatun',
            status: 'win'
          },
          player2: {
            avatar: '/images/images (2).png',
            name: 'Mishks Binthi ',
            status: 'loss'
          },
          scores: '3-0',
          details: '15-13,11-5,11-5'
        },





      ]
    },
    {
      //13)id 39 Boyss under 15 mal  - pak(3)
      id: 39,
      title: "Girls Team - Under 19",
      venue: "Table 2",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' },
        team2: { name: 'IND', flag: '/images/teams/flags/ind.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Evana Thapa',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Taneesha Sanjay',
            status: 'win'
          },
          scores: '0-3',
          details: '9-11,5-11,2-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Bianca Rai',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sayali Rajesh',
            status: 'win'
          },
          scores: '0-3',
          details: '8-11,6-11,2-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Yanggi Paudel',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Risha Mirchandani',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,5-11,6-11'
        },






      ]
    },
    {
      //13)id 40 Boyss under 15 mal  - pak(3)
      id: 40,
      title: "Boys Team - Under 15",
      venue: "Table 4",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'SRI', flag: '/images/Flag_of_Sri_Lanka.svg.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Abul Hashem',
            status: 'loss'
          },
          player2: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'win'
          },
          scores: '1-3',
          details: '11-9,9-11,5-11,5-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Tahmidur Rahman',
            status: 'loss'
          },
          player2: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'win'
          },
          scores: '1-3',
          details: '6-11,11-8,10-12,4-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Monirul Islam',
            status: 'loss'
          },
          player2: {
            avatar: '/images/Flag_of_Sri_Lanka.svg.png',
            name: 'Senul Rathnayake',
            status: 'win'
          },
          scores: '0-3',
          details: '7-11,5-11,8-11'
        },






      ]
    },


    //end
    //start
    {
      //14)id 19 boys under 15 ind - pak(3)
      id: 190,
      title: "Boys Team - Under 15",
      venue: "Table 1",
      score: '3-0',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'IND', flag: '/images/teams/flags/ind.png' },
        team2: { name: 'PAK', flag: '/images/teams/flags/pak.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abdal Muhammad',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-6,11-7,11-4'
        },
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Soham Mukherjee',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abbas Amjad',
            status: 'loss'
          },
          scores: '3-1',
          details: '5-11,11-3,11-7,11-6'
        },
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sardar Rupam',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Noor Khan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-5,11-9,11-8'
        },





      ]
    },
    //end
    //start
    {
      //14)id 20 boys under 15 ind - pak(3)
      id: 20,
      title: "Girls Team - Under 15",
      venue: "Table 1",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'IND', flag: '/images/teams/flags/ind.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Asma Khatun',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Divyanshi Bhowmick',
            status: 'win'
          },
          scores: '0-3',
          details: '4-11,5-11,8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Habiba Khatun',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Syndela Das',
            status: 'win'
          },
          scores: '0-3',
          details: '2-11,4-11,4-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Nusrat Jahan',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Ankolika Charraborty',
            status: 'win'
          },
          scores: '0-3',
          details: '3-11,2-11,2-11'
        },





      ]
    },

    //end
    //start
    {
      //14)id 41 boys under 19 ind - pak(3)
      id: 41,
      title: "Boys Team - Under 19",
      venue: "Table 3",
      score: '0-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'MAL', flag: '/images/teams/flags/mal.png' },
        team2: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Akhyar ahmed',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'janith Batugedara',
            status: 'win'
          },
          scores: '0-3',
          details: '5-11,8-11,11-9,8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Umyr Mohamed',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Shafiullah Akram',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,8-11,7-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Mohamed Aan ',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Diran hamer ',
            status: 'win'
          },
          scores: '0-3',
          details: '2-11,5-11,3-11'
        },





      ]
    },
    //end
    //start
    {
      //50)id 50  boys under 15 Ban - nepal(4)
      id: 50,
      title: "Boys Team - Under 15",
      venue: "Table 1",
      score: '3-1',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Abul Hashem',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Subin Chheri',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-4,16-14,11-5'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Tahmidur Rahman',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Jayashunu Maharjan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-9,11-9,13-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Mhatabur Rahman',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Rijan Shakya',
            status: 'win'
          },
          scores: '2-3',
          details: '14-12,8-11,9-11,11-9,6-11'
        },

        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Hashem Hasib',
            status: 'win'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Jayashunu Maharajan',
            status: 'loss'
          },
          scores: '3-0',
          details: '14-12,11-6,11-6'
        },


      ]
    },
    //end
    ,



    {
      // New match details for UNDER 19 Boys - Nepal vs Pakistan
      id: 91,
      title: "UNDER 19 - BOYS: Nepal vs Pakistan",
      venue: "4th Round",
      score: '2-3',
      day: '27-May',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' },
        team2: { name: 'PAK', flag: '/images/teams/flags/pak.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Prince Thapa Magar',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abbas Amjad Khan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-6, 11-9, 11-5'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Siddharth Tamang',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Shayan Farooq',
            status: 'win'
          },
          scores: '1-3',
          details: '6-11, 8-11, 11-4, 8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Rubin Maharjan',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Muhammad Zain',
            status: 'loss'
          },
          scores: '3-2',
          details: '5-11, 10-12, 11-6, 11-8, 11-4'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Prince Thapa Magar',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Shayan Farooq',
            status: 'win'
          },
          scores: '2-3',
          details: '9-11, 13-11, 1-11, 12-10, 7-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Siddharth Tamang',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abbas Amjad Khan',
            status: 'win'
          },
          scores: '2-3',
          details: '9-11, 11-7, 11-4, 9-11,8-11'
        }
      ]
    },
    //  //start
    // {
    //   //50)id 50  boys under 15 Ban - nepal(4)
    //   id: 50,
    //   title: "Boys Team - Under 15",
    //   venue: "Table 1",
    //   score: '3-1',

    //   day: 'day2',
    //   matchType: 'Team',
    //   ageRange: "Under 15",
    //   teams: {
    //     team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
    //     team2: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' }
    //   },
    //   players: [
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Abul Hashem',
    //         status: 'win'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Nepal.jpg',
    //         name: 'Subin Chheri',
    //         status: 'loss'
    //       },
    //       scores: '3-0',
    //       details: '11-4,16-14,11-5'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Tahmidur Rahman',
    //         status: 'win'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Nepal.jpg',
    //         name: 'Jayashunu Maharjan',
    //         status: 'loss'
    //       },
    //       scores: '3-0',
    //       details: '11-9,11-9,13-11'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Mhatabur Rahman',
    //         status: 'loss'

    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Nepal.jpg',
    //         name: 'Rijan Shakya',
    //         status: 'win'
    //       },
    //       scores: '2-3',
    //       details: '14-12,8-11,9-11,11-9,6-11'
    //     },

    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Hashem Hasib',
    //         status: 'win'

    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Nepal.jpg',
    //         name: 'Jayashunu Maharajan',
    //         status: 'win'
    //       },
    //       scores: '3-0',
    //       details: '14-12,11-6,11-6'
    //     },


    //   ]
    // },
    // //end
    //start
    {
      //51)id 51  boys under 19 sl - nepal(4)
      id: 51,
      title: "Boys Team - Under 19",
      venue: "Table 1",
      score: '3-1',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Shafiullah Akram',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Siddharth Tamang',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-5,11-9,8-11,11-9'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Janith Batugedara',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Rubin Maharjan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-8,11-4,11-5'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Diran Hamer',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Prince Thapa',
            status: 'win'
          },
          scores: '0-3',
          details: '4-11,12-14,9-11'
        },

        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Shaflullah Akram',
            status: 'win'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Rubin Maharajan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-5,11-8,11-7'
        },


      ]
    },
    //end
    //start
    {
      //52)id 52  boys under 19 sl - nepal(4)
      id: 52,
      title: "Girls Team - Under 15",
      venue: "Table 1",
      score: '1-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'PAK', flag: '/images/teams/flags/pak.png' },
        team2: { name: 'NEP', flag: '/images/teams/flags/Nepal.jpg' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Zunaira Khan',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Suramya Shakya',
            status: 'loss'
          },
          scores: '3-1',
          details: '5-11,11-9,11-5,11-9'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Fatima Danish',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Subhashree shrestha',
            status: 'win'
          },
          scores: '1-3',
          details: '11-5,7-11,9-11,5-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Sara Danish',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Mahima Mahata',
            status: 'win'
          },
          scores: '1-3',
          details: '8-11,11-9,4-11,8-11'
        },

        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Zunaira khan',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Nepal.jpg',
            name: 'Subhashree Shrestha',
            status: 'win'
          },
          scores: '0-3',
          details: '5-11,4-11,11-13'
        },


      ]
    },
    //end
    //start
    {
      //53)id 53  boys under 19 sl - nepal(4)
      id: 53,
      title: "Girls Team - Under 19",
      venue: "Table 2",
      score: '1-3',

      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'PAK', flag: '/images/teams/flags/pak.png' },
        team2: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Hoor Fawad',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Tamadi Kavindya',
            status: 'loss'
          },
          scores: '3-2',
          details: '4-11,11-9,7-11,11-6,13-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Kalsoom Khan',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Bimandee Bandara',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,4-11,2-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Bisma Faryal',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Lesanya Sethumdi',
            status: 'win'
          },
          scores: '1-3',
          details: '11-7,5-11,9-11,4-11'
        },

        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Hoor Fawad',
            status: 'loss'

          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Bimandee Bandara',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,7-11,5-11'
        },


      ]
    },
    //end

    {
      // 10)id 12  girls under 19(5)
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
            name: 'Mohomed Ibrahim',
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
            name: 'mahjoob Shuiau',
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
            name: 'Thapa Magar',
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

      // 11)id - 3  Girls under 19 sl -ml (5)
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
            name: 'Mahjoob Shujau',
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
            name: ' Dheema Alu',
            status: 'win'
          },
          scores: '2-3',
          details: '11-6, 11-7, 11-8'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Divya Dharani',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Mishka mohamed',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-6, 11-7, 11-8'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Binamdee Bandara',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Dheema Ali',
            status: 'loss'
          },
          scores: '2-3',
          details: '5-11, 11-6, 11-6, 5-11, 7-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Thamadi Kavinndya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Minha Mahjoob ',
            status: 'loss'
          },
          scores: '03-00',
          details: '13-11, 12-10, 11-05'
        }
      ]
    },
    { //12)id = 5 boys under  15(5)
      id: 5,
      title: "Boys Team - Under 15",
      venue: "Table ",
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
            name: 'Abdal Muhammad',
            status: 'win'
          },
          scores: '2-3',
          details: '11-5, 5-11, 11-5, 6-11, 8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abbas Amjad ',
            status: 'loss'
          },
          scores: '3-2',
          details: '9-11, 11-4, 12-10, 8-11, 11-7'
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
          scores: '3-1',
          details: '11-4, 11-4, 5-11, 11-9'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abbas Amjad ',
            status: 'win'
          },
          scores: '2-3',
          details: '11-6, 9-11, 12-10, 7-11, 6-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Abdal Muhammad',
            status: 'loss'
          },
          scores: '03-02',
          details: '7-11, 11-4, 11-8, 11-2'
        }
      ]
    },
    { //18)id = 5 boys under  15(5)
      id: 18,
      title: "Boys Team - Under 15",
      venue: "Table 4",
      score: '3-2',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'PAK', flag: '/images/teams/flags/pak.png' },
        team2: { name: 'MAL', flag: '/images/teams/flags/mal.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Shanya Farooq',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/mal.png',
            name: 'Umyr Mohamed',
            status: 'loss'
          },
          scores: '3-0',
          details: '12-10, 11-5, 11-4, 6-11, 8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abbass Amijad',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Akhayar Ahemed',
            status: 'win'
          },
          scores: '2-3',
          details: '11-4, 7-11, 11-4, 8-11, 7-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Taha Bilal',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'MOhamed Aan',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-3, 11-2, 11-2'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Shanyan farooq',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'MOhamed Aan',
            status: 'win'
          },
          scores: '1-3',
          details: '6-11, 5-11, 11-3,9-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/pak.png',
            name: 'Abbas Amjad',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Umyr Mohamed',
            status: 'loss'
          },
          scores: '1-3',
          details: '11-4, 11-7, 12-10'
        },

      ]
    },//start
    { //30)id = 5 boys under  19(5)
      id: 30,
      title: "Boys Team - Under 19",
      venue: "Table 4",
      score: '2-3',
      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Ramhimlian Bawm',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Janith Batugedara',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-7, 9-11, 11-9, 11-9'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'MD Nafiz Iqbal',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Shafiullan Akram',
            status: 'loss'
          },
          scores: '3-1',
          details: '14-12, 2-11, 11-4, 11-7'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Abul hashem',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Diran hamer',
            status: 'win'
          },
          scores: '1-3',
          details: '7-11, 11-4, 9-11, 5-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Ramhimlian Bawm',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Shafiullah Akram',
            status: 'win'
          },
          scores: '0-3',
          details: '7-11, 4-11, 4-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'MD Nafiz',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Janith Batugedara',
            status: 'win'
          },
          scores: '1-3',
          details: '11-9, 11-13, 7-11,4-11'
        },


      ]
    },
    //end
    // //start
    // { //35)id = 35 finals  girls under  19(5)
    //   id: 35,
    //   title: "Boys Team - Under 19",
    //   special:"Finals",
    //   venue: "",
    //   score: '2-3',
    //   day: 'day2',
    //   matchType: 'Team',
    //   ageRange: "Under 19",
    //   teams: {
    //     team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
    //     team2: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' }
    //   },
    //   players: [
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Ramhimlian Bawm',
    //         status: 'win'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
    //         name: 'Janith Batugedara',
    //         status: 'loss'
    //       },
    //       scores: '3-1',
    //       details: '11-7, 9-11, 11-9, 11-9'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'MD Nafiz Iqbal',
    //         status: 'win'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
    //         name: 'Shafiullan Akram',
    //         status: 'loss'
    //       },
    //       scores: '3-1',
    //       details: '14-12, 2-11, 11-4, 11-7'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Abul hashem',
    //         status: 'loss'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
    //         name: 'Diran hamer',
    //         status: 'win'
    //       },
    //       scores: '1-3',
    //       details: '7-11, 11-4, 9-11, 5-11'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'Ramhimlian Bawm',
    //         status: 'loss'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
    //         name: 'Shafiullah Akram',
    //         status: 'win'
    //       },
    //       scores: '0-3',
    //       details: '7-11, 4-11, 4-11'
    //     },
    //     {
    //       player1: {
    //         avatar: '/images/teams/flags/bd.png',
    //         name: 'MD Nafiz',
    //         status: 'loss'
    //       },
    //       player2: {
    //         avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
    //         name: 'Janith Batugedara',
    //         status: 'win'
    //       },
    //       scores: '1-3',
    //       details: '11-9, 11-13, 7-11,4-11'
    //     },


    //   ]
    // },
    // //end

    { //31)id = 5 Girls under  19(5)
      id: 31,
      title: "Girls Team - Under 19",
      venue: "Table 4",
      score: '2-3',
      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'BAN', flag: '/images/teams/flags/bd.png' },
        team2: { name: 'PAK', flag: '/images/teams/flags/images.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Khoi Sai',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Kalsoom Khan',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-9, 8-11, 11-8, 11-4'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Oishee Rohman',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Hoor Fawad',
            status: 'win'
          },
          scores: '0-3',
          details: '8-11, 2-11, 4-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Samantha Hossain',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Zunaira Khan',
            status: 'loss'
          },
          scores: '3-1',
          details: '11-5, 6-11, 11-5,11-9'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Khoi Sai',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Hoor Fawad',
            status: 'win'
          },
          scores: '1-3',
          details: '12-14, 10-12, 11-9,7-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/bd.png',
            name: 'Oishee Rohman',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/images.png',
            name: 'Kalsoom Khan',
            status: 'win'
          },
          scores: '1-3',
          details: '10-12, 5-11, 8-11'
        },



      ]
    },
    {
      id: 95,
      title: "Under 15 Girls",
      venue: "Table4",
      score: "3-1", // Fill in the scores if known
      day: "day2", // Adjust the day accordingly
      matchType: "Team", // Adjust the match type accordingly
      ageRange: "Under 15",
      teams: {
        team1: { name: "SRI", flag: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        team2: { name: "NEP", flag: "/images/teams/flags/Nepal.jpg" }
      },
      players: [
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Yoshini jayawardana",
            status: "win" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/Nepal.jpg",
            name: "Suramya Shakya",
            status: "loss" // Adjust the status accordingly
          },
          scores: "3-0", // Fill in the scores if known
          details: "11-2,11-3,11-7" // Provide details if necessary
        },
        // Add two more player pairs following the same structure
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Muthuli Shanya",
            status: "loss" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/Nepal.jpg",
            name: "Subhashree Shrestha",
            status: "win" // Adjust the status accordingly
          },
          scores: "0-3", // Fill in the scores if known
          details: "9-11,8-11,4-11" // Provide details if necessary
        },
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Samindi Weerasooriya",
            status: "win" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/Nepal.jpg",
            name: "Mahima Mahata",
            status: "loss" // Adjust the status accordingly
          },
          scores: "3-0", // Fill in the scores if known
          details: "12-10,13-11,11-2" // Provide details if necessary
        },
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Yoshini Jayawardana",
            status: "win" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/Nepal.jpg",
            name: "Subhashree Shrestha",
            status: "loss" // Adjust the status accordingly
          },
          scores: "3-0", // Fill in the scores if known
          details: "11-7,11-9,11-8" // Provide details if necessary
        },
      ]
    },
    {
      //14)id 80 boys under 19 ind - pak(3)
      id: 80,
      title: "Girls Team - Under 19",
      venue: "Table 3",
      score: '0-3',
      special: "Final",
      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 19",
      teams: {
        team1: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'IND', flag: '/images/teams/flags/ind.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Bimandee bandara',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sanjay',
            status: 'win'
          },
          scores: '0-3',
          details: '6-11,10-12,8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Tamadi Kavindya',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Pritha',
            status: 'win'
          },
          scores: '2-3',
          details: '11-8,3-11,7-11,11-6,0-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Divya Dharani',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'M.Risha',
            status: 'win'
          },
          scores: '0-3',
          details: '8-11,7-11,7-11'
        },]
    },
    {
      id: 94,
      title: "Under 15 Girls",
      venue: "Table 4",
      special: "Final",
      score: "0-3", // Fill in the scores if known
      day: "day2", // Adjust the day accordingly
      matchType: "Team", // Adjust the match type accordingly
      ageRange: "Under 15",
      teams: {
        team1: { name: "SRI", flag: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        team2: { name: "IND", flag: "/images/teams/flags/ind.png" }
      },
      players: [
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Yoshini Jayawardane",
            status: "loss" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/ind.png",
            name: "Divyanshi Bhowmic",
            status: "win" // Adjust the status accordingly
          },
          scores: "0-3", // Fill in the scores if known
          details: "8-11,7-11,9-11" // Provide details if necessary
        },
        // Add two more player pairs following the same structure
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Muthuli Shanaya",
            status: "loss" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/ind.png",
            name: "Syndrela Das",
            status: "win" // Adjust the status accordingly
          },
          scores: "0-3", // Fill in the scores if known
          details: "9-11,9-11,4-11" // Provide details if necessary
        },
        {
          player1: {
            avatar: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png",
            name: "Samindi Weerasooriya",
            status: "loss" // Adjust the status accordingly
          },
          player2: {
            avatar: "/images/teams/flags/ind.png",
            name: "Kavya Pravin",
            status: "win" // Adjust the status accordingly
          },
          scores: "0-3", // Fill in the scores if known
          details: "3-11,8-11,7-11" // Provide details if necessary
        },
      ]
    },

    {
      // New match details for UNDER 15 Boys - India vs Sri Lanka
      id: 93,
      title: "UNDER 15 - BOYS: India vs Sri Lanka",
      venue: "",
      special: "Final",
      score: '3-1',
      day: '27-May',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'IND', flag: '/images/teams/flags/ind.png' },
        team2: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsitha',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-4, 11-5, 11-5'
        },
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Soham Mukherjee',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-6, 11-6, 11-6'
        },
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sahil Rawat',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Agasthya Ananditha',
            status: 'win'
          },
          scores: '2-3',
          details: '7-11, 11-3, 11-6,9-11,10-12'
        },
        {
          player1: {
            avatar: '/images/teams/flags/ind.png',
            name: 'Sarthak Arya',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akian Bojith',
            status: 'loss'
          },
          scores: '3-0',
          details: '11-3, 11-8,11-8'
        },

      ]
    },
    {
      // New match details for U15 Boys (FINAL)
      id: 400,
      title: "Boys Team - Under 15",
      venue: "",
      special: "Final",
      score: '3-1',
      day: 'day2',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'SRI', flag: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png' },
        team2: { name: 'IND', flag: '/images/teams/flags/ind.png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Naviru Nethsara',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'S. Arya',
            status: 'win'
          },
          scores: '0-3',
          details: '04-11,05-11,05-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akain Bojith',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'M.Soham',
            status: 'win'
          },
          scores: '0-3',
          details: '06-11,06-11,06-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Agasthya Ananditha',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'S.Rupam',
            status: 'loss'
          },
          scores: '3-2',
          details: '11-07,03-11,06-11,11-09,12-10'
        },
        {
          player1: {
            avatar: '/images/teams/flags/Flag_of_Sri_Lanka.svg.png',
            name: 'Akain Bojith',
            status: 'loss'
          },
          player2: {
            avatar: '/images/teams/flags/ind.png',
            name: 'S. Arya',
            status: 'win'
          },
          scores: '0-3',
          details: '03-11,08-11,08-11'
        }





      ]
    },//doubles 
    {
      id: 100,
      title: "Boys doubles - under 15",
      venue: "table5",
      score: "3-0",
      day: "day3",
      matchType: "Doubles",
      ageRange: "Under 15 ",
      pair1: [
        { country: "IND" },
        { scoreDetails: "12,11,11" },
        { flag: "/images/teams/flags/ind.png" },
        { status: "win" },
        { name: "Sahil Rawat" },
        { name: "Sardar Rupam" }
      ],
      pair2: [
        { country: "PAK" },
        { scoreDetails: "10,9,9" },
        { flag: "/images/teams/flags/pak.png" },
        { status: "loss" },
        { name: "Abbas Amjad" },
        { name: "Abdal Muhammad" }
      ],


    },
    {
      id: 101,
      title: "Girls doubles - under 19",
      venue: "table 2",
      score: "3-0",
      day: "day3",
      matchType: "Doubles",
      ageRange: "Under 19 ",
      pair1: [
        { country: "IND" },
        { scoreDetails: "11,11,11" },
        { flag: "/images/teams/flags/ind.png" },
        { status: "win" },
        { name: "Taneesha Saniay" },
        { name: "Risha Mirchandan" }
      ],
      pair2: [
        { country: "SRI" },
        { scoreDetails: "8,7,7" },
        { flag: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { status: "loss" },
        { name: "Bimandee Bandara" },
        { name: "Tamadi Kavindya" }
      ],


    }, ,
    {
      id: 1001,
      "title": "U19 MIXED DOUBLES",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      matchType: "Doubles",
      ageRange: "Under 19 ",
      "pair1": [
        { "country": "MAL" },
        { "scoreDetails": "9,12,11" },
        { "flag": "/images/teams/flags/mal.png" },
        { "status": "loss" },
        { "name": "Dheema Ali" },
        { "name": "A. Khalid" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11,14,8" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A. Bhattacharjee" },
        { "name": "V. Pritha" }
      ],


    },   {
      id: 1001,
      "title": "U15 MIXED DOUBLES",
      "venue": "Final",
      "score": "3-1",
      "day": "day4",
      matchType: "Doubles",
      ageRange: "Under 19 ",
      "pair1": [
        { "country": "SRI" },
        { "scoreDetails": "8,11,2,10" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Akain Bojith" },
        { "name": "Yoshini Jayawardhane" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11,1,11,12" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Arya" },
        { "name": "S. Das" }
      ]

    }, 

    // Match details for U15 Girls Doubles - Semi Final 2
    {
      id: 102,
      title: "Girls doubles - under 15",
      venue: "Semi Final 2",
      score: "3-2",
      day: "day3",
      matchType: "Doubles",
      ageRange: "Under 15",
      pair1: [
        { country: "SRI" },
        { scoreDetails: "11,9,11,8,11" },
        { flag: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { status: "win" },
        { name: "Yoshini Jayawardena" },
        { name: "Muthuli Shanya" }
      ],
      pair2: [
        { country: "MAL" },
        { scoreDetails: "7,11,5,11,3" },
        { flag: "/images/teams/flags/mal.png" },
        { status: "loss" },
        { name: "Aishath Alsaa Nafiz" },
        { name: "Aishath Malak Thaseen" }
      ]
    },

    // Match details for U15 Girls Doubles - Semi Final 1
    {
      id: 103,
      title: "Girls doubles - under 15",
      venue: "Semi Final 1",
      score: "3-0",
      day: "day3",
      matchType: "Doubles",
      ageRange: "Under 15",
      pair1: [
        { country: "IND" },
        { scoreDetails: "11, 11, 11" },
        { flag: "/images/teams/flags/ind.png" },
        { status: "win" },
        { name: "Kavya Pravin Bhatti" },
        { name: "Ankolika Charraborty" }
      ],
      pair2: [
        { country: "NEP" },
        { scoreDetails: "5, 9, 6" },
        { flag: "/images/teams/flags/Nepal.jpg" },
        { status: "loss" },
        { name: "Subhashree Shrestha" },
        { name: "Suramya Shakya" }
      ]
    },

    // Match details for U19 Boys Doubles - Semi Final 1
    {
      id: 104,
      title: "Boys doubles - under 19",
      venue: "Semi Final 1",
      score: "3-0",
      day: "day3",
      matchType: "Doubles",
      ageRange: "Under 19",
      pair1: [
        { country: "IND" },
        { scoreDetails: "11, 11, 11" },
        { flag: "/images/teams/flags/ind.png" },
        { status: "win" },
        { name: "Ankur Bhattacharjee" },
        { name: "Jash Amit Modi" }
      ],
      pair2: [
        { country: "SRI" },
        { scoreDetails: "3,4,5" },
        { flag: "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { status: "loss" },
        { name: "Shafiullah Akram" },
        { name: "Janith Batugedara" }
      ]
    }
    ,


    {
      "id": 106,
      "title": "Boys Doubles - Under 15",
      "venue": "Table 2",
      "score": "3-1",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "BAN" },
        { "scoreDetails": "17, 06, 11, 11" },
        { "flag": "/images/teams/flags/bd.png" },
        { "status": "win" },
        { "name": "H. Hasib" },
        { "name": "T. Rahman" }
      ],
      "pair2": [
        { "country": "SRI" },
        { "scoreDetails": "15, 11, 07, 05" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Akain Bojith" },
        { "name": "Naviru Nethsara" }
      ]
    },

    {
      "id": 108,
      "title": "Mixed Doubles - Under 15",
      "venue": "Table 4",
      "score": "3-0",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "SRI" },
        { "scoreDetails": "11, 11, 11" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "win" },
        { "name": "Akain Bojith" },
        { "name": "Yoshini Jayawardhane" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "03, 08, 07" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "A. Khan" },
        { "name": "K. Zunaira" }
      ]
    },
    {
      "id": 109,
      "title": "Mixed Doubles - Under 15",
      "venue": "Table 1",
      "score": "3-0",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "12, 11, 11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Arya" },
        { "name": "S. Das" }
      ],
      "pair2": [
        { "country": "BAN" },
        { "scoreDetails": "10, 05, 04" },
        { "flag": "/images/teams/flags/bd.png" },
        { "status": "loss" },
        { "name": "H. Hasib" },
        { "name": "A. Khatun" }
      ]
    },

    {
      "id": 111,
      "title": "Girls Doubles - Under 19",
      "venue": "Semi Final 2",
      "score": "3-2",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "NEP" },
        { "scoreDetails": "8,11,5,11,11" },
        { "flag": "/images/teams/flags/Nepal.jpg" },
        { "status": "win" },
        { "name": "B. Rai" },
        { "name": "E. Thapa" }
      ],
      "pair2": [
        { "country": "MAL" },
        { "scoreDetails": "11,3,11,7,8" },
        { "flag": "/images/teams/flags/mal.png" },
        { "status": "loss" },
        { "name": "Dheema Ali" },
        { "name": "M. Ibrahim" }
      ]
    },

    {
      "id": 113,
      "title": "Boys Doubles - Under 19",
      "venue": "Semi Final 2",
      "score": "3-1",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "PAK" },
        { "scoreDetails": "11, 12, 10, 11" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "win" },
        { "name": "F. Shayan" },
        { "name": "T. Bilal" }
      ],
      "pair2": [
        { "country": "MAL" },
        { "scoreDetails": "08, 10, 12, 09" },
        { "flag": "/images/teams/flags/mal.png" },
        { "status": "loss" },
        { "name": "H. Khalid" },
        { "name": "M. Muizzu" }
      ]
    },// not  kolayak
    {
      "id": 114,
      "title": "Mixed Doubles - Under 19",
      "venue": "Semi Final ",
      "score": "3-0",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "SRI" },
        { "scoreDetails": "07, 08, 07" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Shafiullah Akram" },
        { "name": "Bimandee Bandara" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11, 11, 11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A. Bhattacharjee" },
        { "name": "V. Pritha" }
      ]
    },

    {
      "id": 115,
      "title": "Mixed Doubles - Under 19",
      "venue": "Semi Final 2",
      "score": "3-2",
      "day": "day3",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "MAL" },
        { "scoreDetails": "11,9,8,11,11" },
        { "flag": "/images/teams/flags/mal.png" },
        { "status": "win" },
        { "name": "Dheema Ali" },
        { "name": "A. Khalid" }
      ],
      "pair2": [
        { "country": "BAN" },
        { "scoreDetails": "7,11,11,4,7" },
        { "flag": "/images/teams/flags/bd.png" },
        { "status": "loss" },
        { "name": "R. Bawm" },
        { "name": "S. Marma" }
      ]
    },
    {
      "id": 116,
      "title": "Under 15 Girls - Under 15",
      "venue": "Semi Final 1",
      "score": "0-3",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "SRI" },
        { "scoreDetails": "8,4,7" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Yoshini Jayawardhane" },

      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Das (IND)	" },

      ]
    },
    {
      "id": 117,
      "title": "Under 15 Girls - Under 15",
      "venue": "Semi Final 2",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "B. Divyanshi" },

      ],
      "pair2": [
        { "country": "NEP" },
        { "scoreDetails": "3,4,8" },
        { "flag": "/images/teams/flags/Nepal.jpg" },
        { "status": "loss" },
        { "name": "S. Shrestha	" },

      ]
    },
    {
      "id": 117,
      "title": "Under 15 Girls Singles",
      "venue": "Semi Final 1",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Das" }
      ],
      "pair2": [
        { "country": "SRI" },
        { "scoreDetails": "8,4,7" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Yoshini Jayawardhane" }
      ]
    },
    {
      "id": 118,
      "title": "Under 15 Girls Singles",
      "venue": "Semi Final 2",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "B. Divyanshi" }
      ],
      "pair2": [
        { "country": "NEP" },
        { "scoreDetails": "3,4,8" },
        { "flag": "/images/teams/flags/Nepal.jpg" },
        { "status": "loss" },
        { "name": "S. Shrestha" }
      ]
    },
    {
      "id": 119,
      "title": "Under 15 Boys Singles",
      "venue": "Semi Final 1",
      "score": "3-1",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,10,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Mukherjee" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "9,9,12,8" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "M. Khan" }
      ]
    },
    {
      "id": 120,
      "title": "Under 15 Boys Singles",
      "venue": "Semi Final 2",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,13,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Arya" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "9,11,2" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "A. Khan" }
      ]
    },
    {
      "id": 121,
      "title": "Under 19 Girls Singles",
      "venue": "Semi Final 1",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "P. Priya" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "7,8,3" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "F. Hoor" }
      ]
    },
    {
      "id": 122,
      "title": "Under 19 Girls Singles",
      "venue": "Semi Final 2",
      "score": "2-3",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "SRI" },
        { "scoreDetails": "12,16,4,11,10" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Bimandee Bandara" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "10,18,11,9,12" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "R. Sayali" }
      ]
    },
    {
      "id": 123,
      "title": "Under 19 Boys Singles",
      "venue": "Semi Final 1",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A. Bhattacharjee" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "5,7,6" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "S. Farooq" }
      ]
    },
    {
      "id": 124,
      "title": "Under 19 Boys Singles",
      "venue": "Semi Final 2",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A. Modi" }
      ],
      "pair2": [
        { "country": "BAN" },
        { "scoreDetails": "3,9,5" },
        { "flag": "/images/teams/flags/bd.png" },
        { "status": "loss" },
        { "name": "N. Iqbal" }
      ]
    },
    {
      "id": 125,
      "title": "U15 Girls Singles",
      "venue": "Final",
      "score": "3-1",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "U15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "2,10,12,8,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Das" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "1,11,10,8,8" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "loss" },
        { "name": "B. Divyanshi" }
      ]
    },
    {
      "id": 126,
      "title": "U15 Boys Singles",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "U15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "S. Mukherjee" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "7,8,7" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "loss" },
        { "name": "S.Arya" }
      ]
    },
    {
      "id": 127,
      "title": "U19 Girls Singles",
      "venue": "Final",
      "score": "3-1",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "U19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "9,12,4,8" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "loss" },
        { "name": "P.Priya" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11,10,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "R. Sayali" }
      ]
    },
    {
      "id": 128,
      "title": "U19 Boys Singles",
      "venue": "Final",
      "score": "3-1",
      "day": "day4",
      "matchType": "Singles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "8,11,9,6" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "loss" },
        { "name": "A.Modi" }
      ],
      "pair2": [
        { "country": "IND" },
        { "scoreDetails": "11,5,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A.Bhattacharjee" }
      ]
    },
    {
      "id": 500,
      "title": "Final - India vs Sri Lanka",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "P. Bhatt" },
        { "name": "C. Ankolika" }
      ],
      "pair2": [
        { "country": "SRI" },
        { "scoreDetails": "6,5,6" },
        { "flag": "/images/teams/flags/Flag_of_Sri_Lanka.svg.png" },
        { "status": "loss" },
        { "name": "Yoshini Jayawardhane" },
        { "name": "Mithuli Shanaya" }
      ]
    },
    {
      "id": 501,
      "title": "Final - India vs Bangladesh",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      "matchType": "Doubles",
      "ageRange": "Under 15",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "R. Sahil" },
        { "name": "S. Rupam" }
      ],
      "pair2": [
        { "country": "BAN" },
        { "scoreDetails": "8,6,8" },
        { "flag": "/images/teams/flags/bd.png" },
        { "status": "loss" },
        { "name": "H. Hasib" },
        { "name": "T. Rahman" }
      ]
    },
    {
      "id": 502,
      "title": "Final - India vs Nepal",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      "matchType": "Doubles",
      "ageRange": "Under 19",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,11,11" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "T. Sanjay" },
        { "name": "M. Risha" }
      ],
      "pair2": [
        { "country": "NEP" },
        { "scoreDetails": "3,6,5" },
        { "flag": "/images/teams/flags/Nepal.jpg" },
        { "status": "loss" },
        { "name": "B. Rai" },
        { "name": "E. Thapa" }
      ]
    },
    {
      "id": 503,
      "title": "Final - India vs Pakistan",
      "venue": "Final",
      "score": "3-0",
      "day": "day4",
      "matchType": "Doubles",
      "ageRange": "Senior",
      "pair1": [
        { "country": "IND" },
        { "scoreDetails": "11,12,13" },
        { "flag": "/images/teams/flags/ind.png" },
        { "status": "win" },
        { "name": "A. Bhattacharjee" },
        { "name": "J. Modi" }
      ],
      "pair2": [
        { "country": "PAK" },
        { "scoreDetails": "6,11,9" },
        { "flag": "/images/teams/flags/pak.png" },
        { "status": "loss" },
        { "name": "F. Shayan" },
        { "name": "T. Bilal" }
      ]
    },








  ];

  const filteredMatches = matches.filter(match => {
    const categoryMatch = category === 'all' || match.title.toLowerCase().includes(category.toLowerCase());
    const ageRangeMatch = ageRange === 'all' || match.ageRange === ageRange;
    const matchTypeMatch = matchType === 'all' || match.matchType.toLowerCase() === matchType.toLowerCase();
    const dayMatch = day === 'all' || match.day === day;
    return categoryMatch && ageRangeMatch && matchTypeMatch && dayMatch;
  });

  const handleCategoryChange = (category) => () => setCategory(category);
  const handleAgeRangeChange = (event) => setAgeRange(event.target.value);
  const handleMatchTypeChange = (event) => setMatchType(event.target.value);
  const handleDayChange = (event) => setDay(event.target.value);

  return (
    <div className="m-8" >
      <div className="filter-buttons">
        <Button variant="contained" color="error" onClick={handleCategoryChange('all')}>All</Button>
        <Button variant="contained" color="error" onClick={handleCategoryChange('Girls')}>Girls</Button>
        <Button variant="contained" color="error" onClick={handleCategoryChange('Boys')}>Boys</Button>
        <Select
          value={ageRange}
          onChange={handleAgeRangeChange}
          displayEmpty
          sx={{ backgroundColor: "#c21f1f", marginLeft: '10px', marginRight: '10px', color: "white" }}
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
          sx={{ backgroundColor: "#c21f1f", color: "white" }}
        >
          <MenuItem value="all">
            <em>Match Type</em>
          </MenuItem>
          <MenuItem value="Team">Team</MenuItem>
          <MenuItem value="Singles">Singles</MenuItem>
          <MenuItem value="Doubles">Doubles</MenuItem>
          <MenuItem value="Mixed Doubles">Mixed Doubles</MenuItem>
        </Select>
        <Select
          value={day}
          onChange={handleDayChange}
          displayEmpty
          sx={{ backgroundColor: "#c21f1f", color: "white", marginLeft: '10px' }}
        >
          <MenuItem value="all">
            <em>Day</em>
          </MenuItem>
          <MenuItem value="day1">Day 1</MenuItem>
          <MenuItem value="day2">Day 2</MenuItem>
          <MenuItem value="day3">Day 3</MenuItem>
          <MenuItem value="day4">Day 4</MenuItem>
        </Select>
      </div>

      <Typography variant="h4" align="center" gutterBottom>
        Matches
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {filteredMatches.map((match) => (
          <Grid item xs={12} sm={6} md={4} key={match.id}>
            {/* Check the matchType to determine which card component to render */}
            {match.matchType === 'Team' ? (
              <TeamMatchCard match={match} />
            ) : match.matchType === 'Singles' ? (
              <IndividualMatchCard match={match} />
            ) : match.matchType === 'Doubles' ? (
              <DoubleMatchCard match={match} /> // Render DoubleMatchCard for doubles matches
            ) : null}
          </Grid>
        ))}
      </Grid>
    </div >
  );
};

export default Matches;