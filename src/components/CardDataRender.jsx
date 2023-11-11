import { useState } from 'react';
import Card from './Card';
import ExcelReader from './ExcelReader';

const App = () => {
    const [excelData, setExcelData] = useState(null);

    const handleFileUpload = (data) => {
        setExcelData(data);
    };

    return (
        <div>
            <ExcelReader onFileUpload={handleFileUpload} />
            {excelData && (
                <div>
                    <h2>Data from Excel:</h2>
                    {excelData.map((row, index) => (
                        <Card key={index} data={row} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
