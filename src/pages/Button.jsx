import CsvFileUpload from '../components/CsvFileUpload';
import '../styles/Button.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import TableFields from '../components/TableFields';

export const Button = () => {
    const [uploaded, setUploaded] = useState(false);
    const [columns, setData] = useState([]);

    const handleUpload = (objectsList) => {
        localStorage.setItem('excel_data', JSON.stringify(objectsList));
        const table_columns = Object.keys(objectsList[0]);
        localStorage.setItem('table_col', JSON.stringify(table_columns));
        setData(table_columns);
        setUploaded(true);
        toast.success('File uploaded Successfully');
    };

    return (
        <>
            <CsvFileUpload onUpload={handleUpload} />
            {uploaded && <TableFields data={columns} onDoneButtonClick={()=>{}} />}
        </>
    );
};
