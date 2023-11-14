import { useState } from 'react';
import '../styles/addNewCard.css';
import { useNavigate } from 'react-router-dom';

const TableFields = ({ data, onDoneButtonClick }) => {
    const [colData, setColData] = useState(() => {
        return data.map((item) => ({ label: item, checked: true }));
    });

    const handleCheckboxChange = (index) => {
        setColData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index].checked = !updatedData[index].checked;
            return updatedData;
        });
    };

    const navigate = useNavigate();

    const handleDoneButtonClick = () => {
        const checkedItems = colData
            .filter((item) => item.checked)
            .map((item) => item.label);
        localStorage.setItem('table_col', JSON.stringify(checkedItems));
        onDoneButtonClick();
        navigate('/data/'.replace(':id', '1'));
    };

    return (
        <>
            <div className="blur"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-14 rounded-lg shadow-md border-2 tableValueCard">
                <h2>Select the columns to be viewed.</h2>
                {colData.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            checked={item.checked}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <label htmlFor={`checkbox-${index}`} className="ml-2">
                            {item.label}
                        </label>
                    </div>
                ))}
                <button
                    className="border border-gray-500 hover:border-green-500 px-5 py-1 rounded transition duration-300 ease-in-out btnPop"
                    onClick={handleDoneButtonClick}
                >
                    Done
                </button>
            </div>
        </>
    );
};

export default TableFields;
