import { Button, Card, CardContent, Grid, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import './matches.css';

const Matches = () => {
  const [category, setCategory] = useState('all');
  const [ageRange, setAgeRange] = useState('all');
  const [matchType, setMatchType] = useState('all');
  const [dayFilter, setDayFilter] = useState('day1');

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
      id: 7,
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
      venue: "Table 5",
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
    },
    {
      //9)id 13 boys under 15 sl - mala(3)
      id: 13,
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
    }, ,
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
      venue: "Table 5",
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
      venue: "Table 5",
      score: '3-2',
      day: 'day1',
      matchType: 'Team',
      ageRange: "Under 15",
      teams: {
        team1: { name: 'PAK', flag: '/images/teams/flags/images.png' },
        team2: { name: 'MAL', flag: '/images/teams/flags/images (2).png' }
      },
      players: [
        {
          player1: {
            avatar: '/images/teams/flags//images/teams/flags/images.png',
            name: 'Shanya Farooq',
            status: 'win'
          },
          player2: {
            avatar: '/images/teams/flags/images (2).png',
            name: 'Umyr Mohamed',
            status: 'loss'
          },
          scores: '3-0',
          details: '12-10, 11-5, 11-4, 6-11, 8-11'
        },
        {
          player1: {
            avatar: '/images/teams/flags//images/teams/flags/images.png',
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
            avatar: '/images/teams/flags//images/teams/flags/images.png',
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
            avatar: '/images/teams/flags//images/teams/flags/images.png',
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
            avatar: '/images/teams/flags//images/teams/flags/images.png',
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
    },


  ];


  const filteredMatches = matches.filter(match => {
    const categoryMatch = category === 'all' || match.title.toLowerCase().includes(category.toLowerCase());
    const ageRangeMatch = ageRange === 'all' || match.ageRange === ageRange;
    const matchTypeMatch = matchType === 'all' || match.matchType.toLowerCase() === matchType.toLowerCase();
    return categoryMatch && ageRangeMatch && matchTypeMatch;
  });

  const handleCategoryChange = (category) => () => setCategory(category);
  const handleAgeRangeChange = (event) => setAgeRange(event.target.value);
  const handleMatchTypeChange = (event) => setMatchType(event.target.value);

  return (
    <div className="m-8">
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
      </div>

      <Typography variant="h4" align="center" gutterBottom>
        {dayFilter.charAt(0).toUpperCase() + dayFilter.slice(1).replace('day', 'Day ')}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {filteredMatches.map((match) => (
          <Grid item xs={12} sm={6} md={4} key={match.id}>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Matches;
