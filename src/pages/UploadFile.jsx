import { useState } from 'react';
import Card from '../components/Card';
import CsvFileUpload from '../components/CsvFileUpload';

const UploadFile = () => {
    const [csvData, setCsvData] = useState([]);

    const handleUpload = (objectsList) => {
        setCsvData(objectsList);
    };

    return (
        <div>
            <h1>CSV File Upload and Parsing</h1>
            <CsvFileUpload onUpload={handleUpload} />
            <h2>Parsed Data:</h2>
            <div className="cards-container">
                {csvData.map((object, index) => (
                    <Card key={index} data={object} />
                ))}
            </div>{' '}
        </div>
    );
};

export default UploadFile;
