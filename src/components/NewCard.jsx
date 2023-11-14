import { useState } from 'react';
import '../styles/addNewCard.css';

const NewCard = ({ data, onClose, updateCsvData }) => {
    const initialFormState = Object.fromEntries(
        Object.keys(data).map((key) => [key, '']),
    );

    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (key, value) => {
        setFormData((prevData) => ({ ...prevData, [key]: value }));
    };

    const handleAddCard = () => {
        // Append formData to csvData in local storage
        const storedCsvData =
            JSON.parse(localStorage.getItem('excel_data')) || [];
        const updatedCsvData = [...storedCsvData, formData];
        localStorage.setItem('excel_data', JSON.stringify(updatedCsvData));

        updateCsvData(updatedCsvData);
        onClose();
        location.reload();
    };

    return (
        <>
            <div className="blur"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-14 rounded-lg shadow-md border-2 newData w-full sm:w-2/3 md:w-1/2">
                <div>
                    <h5 className="text-2xl font-semibold mb-10">Add Data</h5>
    
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="mb-4 flex flex-col sm:flex-row items-between">
                            <div className="w-full sm:w-3/6 mb-2 sm:mb-0">
                                <h2 className="text-lg font-semibold mb-1">
                                    {key}
                                </h2>
                            </div>
                            <div className="w-full sm:w-3/6">
                                <input
                                    type="text"
                                    value={formData[key]}
                                    name={key}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className="p-2 border border-gray-300 rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-10">
                    <button
                        className="border border-gray-500 hover:border-red-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="border border-gray-500 hover:border-green-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                        onClick={handleAddCard}
                    >
                        Add Card
                    </button>
                </div>
            </div>
        </>
    );
    
};

export default NewCard;
