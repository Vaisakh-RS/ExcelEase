import { useState, useEffect } from 'react';
import Card from '../components/Card';
import CsvFileUpload from '../components/CsvFileUpload';
import NewCard from '../components/NewCard';

const UploadFile = () => {
    const [csvData, setCsvData] = useState([]);
    const [NewCardPage, setNewCardPage] = useState(false);

    const handleUpdateCsvData = (newCsvData) => {
        setCsvData(newCsvData); // Assuming setCsvData is the state updater
    };

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
            <button
                onClick={() => {
                    localStorage.clear();
                    setCsvData([]);
                }}
            >
                Clear
            </button>
            <button
                onClick={() => {
                    setNewCardPage(true);
                }}
            >
                Add New Card
            </button>

            {NewCardPage && (
                <NewCard
                    data={csvData.length > 0 ? csvData[0] : {}}
                    onClose={() => {
                        setNewCardPage(false);
                    }}
                    updateCsvData={handleUpdateCsvData}
                />
            )}
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
