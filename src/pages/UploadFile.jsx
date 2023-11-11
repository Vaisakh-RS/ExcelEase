import { useState } from 'react';
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
            <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
    );
};

export default UploadFile;
