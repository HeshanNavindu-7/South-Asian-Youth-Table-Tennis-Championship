import React, { useState } from 'react';

const countries = [
    {
        name: 'Sri Lanka',
        flag: './images/teams/flags/Flag_of_Sri_Lanka.svg.png',
        gold: 1,
        silver: 5,
        bronze: 6,
    },
    {
        name: 'Bangladesh',
        flag: './images/teams/flags/bd.png',
        gold: 0,
        silver: 2,
        bronze: 5,
    },
    {
        name: 'Nepal',
        flag: './images/teams/flags/Nepal.jpg',
        gold: 0,
        silver: 1,
        bronze: 4,
    },
    {
        name: 'Pakistan',
        flag: './images/teams/flags/pak.png',
        gold: 0,
        silver: 1,
        bronze: 9,
    },
    {
        name: 'India',
        flag: './images/teams/flags/ind.png',
        gold: 13,
        silver: 4,
        bronze: 0,
    },
    {
        name: 'Maldives',
        flag: './images/teams/flags/mal.png',
        gold: 0,
        silver: 1,
        bronze: 3,
    },
    // Add more countries as needed
];

const Leaderboard = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Calculate total medals for each country and sort by the total
    const sortedCountries = countries
        .map(country => ({
            ...country,
            total: country.gold + country.silver + country.bronze,
        }))
        .sort((a, b) => {
            // First, compare by gold medals
            if (a.gold !== b.gold) {
                return b.gold - a.gold;
            }
            // If gold medals are equal, compare by silver medals
            if (a.silver !== b.silver) {
                return b.silver - a.silver;
            }
            // If silver medals are also equal, compare by bronze medals
            return b.bronze - a.bronze;
        });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-50">Medal Leaderboard</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
                        <tr>
                            <th className="w-1/3 px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Country</th>
                            <th className="w-1/6 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Gold</th>
                            <th className="w-1/6 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Silver</th>
                            <th className="w-1/6 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Bronze</th>
                            <th className="w-1/6 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sortedCountries.map((country, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 transition duration-200 ease-in-out transform cursor-pointer"
                                onClick={() => setSelectedCountry(country)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                    <span className='w-8'> {index + 1} </span>
                                    <span className="text-3xl mr-4 w-10">

                                        <img src={country.flag} alt={`${country.name} flag`} />
                                    </span>
                                    <span className="text-lg font-semibold text-gray-900">{country.name}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-lg text-yellow-600 font-semibold">
                                    <span className="bg-yellow-100 px-4 py-2 rounded-full">{country.gold}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-lg text-gray-600 font-semibold">
                                    <span className="bg-gray-100 px-4 py-2 rounded-full">{country.silver}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-lg text-orange-600 font-semibold">
                                    <span className="bg-orange-100 px-4 py-2 rounded-full">{country.bronze}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-lg font-semibold">{country.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedCountry && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                    <div className="bg-white rounded-lg p-8 shadow-lg relative min-w-lg mx-auto z-10" style={{ width: "500px" }}>
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setSelectedCountry(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">{selectedCountry.name}</h2>
                        <div className="flex justify-center mb-6">
                            <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="w-30 h-20" />
                        </div>
                        <div className='flex w-fit m-auto'>

                            <div className=" justify-center mb-4">
                                <img src="https://i.pinimg.com/originals/dc/1a/21/dc1a213d5a749f2b045220f75c214854.png" alt="Silver Medal" className="w-14  mx-2" />
                                <p className="text-lg text-gray-600 font-semibold ml-8">{selectedCountry.silver}</p>
                            </div>
                            <div className=" justify-center mb-4">
                                <img src="https://img.pikbest.com/png-images/20190929/red-streamer-gold-medal-png-transparent-bottom_2603785.png!sw800" alt="Gold Medal" className="w-28 mx-2" />
                                <p className="text-lg text-yellow-600 font-semibold ml-14">{selectedCountry.gold}</p>
                            </div>
                            <div className=" justify-center mb-4">
                                <img src="https://i.pinimg.com/originals/28/52/82/285282ec75359c4bb5670cd4d170285a.png" alt="Bronze Medal" className="w-12 mx-2" />
                                <p className="text-lg text-orange-600 font-semibold ml-8">{selectedCountry.bronze}</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold text-center mb-4 text-gray-900">Total Medals: {selectedCountry.total}</p>
                        <p className="text-lg mt-2 text-green-600 font-semibold text-center">Congratulations!</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Leaderboard;
