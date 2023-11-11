import { useState, useEffect } from 'react';
import Card from '../components/Card';
import CsvFileUpload from '../components/CsvFileUpload';

const UploadFile = () => {
    const [csvData, setCsvData] = useState([]);

    const handleUpload = (objectsList) => {
        // Convert objectsList to JSON string and store in local storage
        localStorage.setItem('csvData', JSON.stringify(objectsList));
        // Update state with the parsed CSV data
        setCsvData(objectsList);
    };

    // Function to retrieve data from local storage during component initialization
    const retrieveDataFromLocalStorage = () => {
        const storedData = localStorage.getItem('csvData');
        if (storedData) {
            // Parse the JSON string back to an array
            setCsvData(JSON.parse(storedData));
        }
    };

    useEffect(() => {
        retrieveDataFromLocalStorage();
    }, []);

    return (
        <div>
            <h1>CSV File Upload and Parsing</h1>
            <CsvFileUpload onUpload={handleUpload} />
            <h2>Parsed Data:</h2>
            <div className="cards-container">
                {csvData.map((object, index) => (
                    <Card key={index} data={object} />
                ))}
            </div>
        </div>
    );
};

export default UploadFile;
