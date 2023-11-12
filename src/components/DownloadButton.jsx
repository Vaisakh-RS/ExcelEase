import '../styles/addNewButton.css';
import * as XLSX from 'xlsx';;
import { useState } from 'react';

const DownloadButton = () => {
    
    const [csvData, setCsvData] = useState(() => {
        const storedData = localStorage.getItem('excel_data');
        return storedData ? JSON.parse(storedData) : null;
    });
    
    const downloadExcel = () => {
        if (csvData) {
            const ws = XLSX.utils.json_to_sheet(csvData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            XLSX.writeFile(wb, 'excel_data.xlsx');
        }
    };

    return (
        <>
            <div className="buttonDU">
                <button onClick={() => {}} className="upload">
                    Upload New
                </button>
                <button onClick={downloadExcel} className="download">
                    Download
                </button>
            </div>
        </>
    );
};

export default DownloadButton;
