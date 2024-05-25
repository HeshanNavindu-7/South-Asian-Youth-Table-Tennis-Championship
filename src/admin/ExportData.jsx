// src/components/ExportData.js
import { get, ref } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
// import { Parser } from 'json2csv';

const flattenObject = (obj, parent = '', res = {}) => {
    for (let key in obj) {
        const propName = parent ? `${parent}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
};

const ExportData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbRef = ref(database, 'users');
                const snapshot = await get(dbRef);

                if (snapshot.exists()) {
                    const fetchedData = snapshot.val();
                    const flattenedData = Object.entries(fetchedData).map(([key, value]) => ({
                        id: key,
                        ...flattenObject(value)
                    }));
                    setData(flattenedData);

                    if (flattenedData.length > 0) {
                        setHeaders(Object.keys(flattenedData[0]));
                    }
                } else {
                    console.log("No data available");
                    setData([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const jsonToCsv = (jsonData) => {
        const parser = new Parser();
        return parser.parse(jsonData);
    };

    const downloadCsv = (csv, filename) => {
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleExport = () => {
        const csv = jsonToCsv(data);
        downloadCsv(csv, 'firebase_data.csv');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <button
                onClick={handleExport}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
                Export Data to Excel
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <th key={header} className="py-2 px-4 border-b border-gray-200">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="text-center">
                                {headers.map(header => (
                                    <td key={header} className="py-2 px-4 border-b border-gray-200">{item[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExportData;
