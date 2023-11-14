import '../styles/addNewButton.css';
import * as XLSX from 'xlsx';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import '../styles/csvFileUpload.css';
import toast from 'react-hot-toast';
import TableFields from './TableFields';

const DownloadButton = () => {

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file.type == 'text/csv') {
            Papa.parse(file, {
                complete: (result) => {
                    const data = result.data;
                    onUpload(data);
                },
                header: true,
            });
        } else if (
            file.type ===
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            file.type === 'application/vnd.ms-excel'
        ) {
            const arrayBuffer = file.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            onUpload(data);
        } else {
            toast.error(
                'Unsupported file type. Please upload a CSV or XLSX file',
            );
        }
    }, []);
    const [uploaded, setUploaded] = useState(false);
    const [columns, setData] = useState([]);

    const onUpload = (data) => {
        localStorage.setItem('excel_data', JSON.stringify(data));
        toast.success('File uploaded Successfully');
        const table_columns = Object.keys(data[0]);
        localStorage.setItem('table_col', JSON.stringify(table_columns));
        setData(table_columns);
        setUploaded(true);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const [csvData] = useState(() => {
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
                <div className="upload" {...getRootProps()}>
                    <input {...getInputProps()} /> <p>Upload New</p>
                </div>
                <button onClick={downloadExcel} className="download">
                    Download
                </button>
            </div>
            {uploaded && <TableFields data={columns} />}
        </>
    );
};

export default DownloadButton;
