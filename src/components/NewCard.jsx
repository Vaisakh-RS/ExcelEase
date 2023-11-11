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
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
                <p className="border-b-2 border-gray-300 mb-4 pb-2">
                    ---------------------
                </p>

                <h5 className="text-xl font-semibold mb-2">Card</h5>
                <p className="text-lg font-semibold mb-4">============</p>

                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="mb-4 flex items-center">
                        <div className="w-1/6">
                            <h2 className="text-lg font-semibold mb-1">
                                {key}
                            </h2>
                        </div>
                        <div className="w-5/6">
                            <input
                                type="text"
                                value={formData[key]}
                                onChange={(e) =>
                                    handleInputChange(key, e.target.value)
                                }
                                className="w-1/4 p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                ))}
                <p className="border-t-2 border-gray-300 pt-2">
                    ---------------------
                </p>
            </div>
            <button onClick={handleAddCard}>Add Card</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default NewCard;
