import { useState } from 'react';

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
    };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-14 rounded-lg shadow-md border-2">
            <div>
                <h5 className="text-2xl font-semibold mb-10">Add Data</h5>

                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="mb-4 flex items-center">
                        <div className="w-3/6">
                            <h2 className="text-lg font-semibold mb-1">
                                {key}
                            </h2>
                        </div>
                        <div className="w-3/6">
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
            <div className="flex justify-between">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={handleAddCard}
                >
                    Add Card
                </button>
                <button
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default NewCard;
