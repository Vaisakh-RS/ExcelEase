/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import CsvFileUpload from '../components/CsvFileUpload';
import '../styles/Button.css';

export const Button = () => {
    const navigate = useNavigate();

    const handleUpload = (objectsList) => {
        localStorage.setItem('excel_data', JSON.stringify(objectsList));
        navigate('/data/'.replace(':id', '1'));
    };

    return <CsvFileUpload onUpload={handleUpload} />;
};
