import { useNavigate } from 'react-router-dom';
import CsvFileUpload from '../components/CsvFileUpload';

const UploadFile = () => {
    const navigate = useNavigate();

    const handleUpload = (objectsList) => {
        localStorage.setItem('excel_data', JSON.stringify(objectsList));
        navigate('/data/:id'.replace(':id', '1'));
    };

    return (
        <div>
            <h1 className='p-20 text-2xl'>Upload your CSV or XLSX file</h1>
            <CsvFileUpload onUpload={handleUpload} />
        </div>
    );
};

export default UploadFile;
