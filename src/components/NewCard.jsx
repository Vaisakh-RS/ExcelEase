import { useState, useEffect } from 'react';

/* eslint-disable react/prop-types */
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
        const storedCsvData = JSON.parse(localStorage.getItem('csvData')) || [];
        const updatedCsvData = [...storedCsvData, formData];
        localStorage.setItem('csvData', JSON.stringify(updatedCsvData));

        // Notify the parent component to update its state
        updateCsvData(updatedCsvData);

        // Close the modal or perform any other actions
        onClose();
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <div>
                <h5 className="text-2xl font-semibold mb-10">Card</h5>

                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="mb-4 flex items-center">
                        <div className="w-1/3">
                            <h2 className="text-lg font-semibold mb-1">
                                {key}
                            </h2>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                value={formData[key]}
                                name={key}
                                onChange={(e) =>
                                    handleInputChange(key, e.target.value)
                                }
                                className="w-1/2 p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleAddCard}>Add Card</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default NewCard;
