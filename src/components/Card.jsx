import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/card.css';

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    const params = useParams();
    const [formData, setFormData] = useState(data);
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setEdit(false);
    }, [params.id]);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleInputChange = (key, e) => {
        console.log(e.target.value);
        console.log(formData);
        setFormData((prevData) => ({
            ...prevData,
            [key]: e.target.value,
        }));
    };

    const changeToEdit = () => {
        setEdit(true);
    };

    const updateData = () => {
        setEdit(false);
        const excelData = JSON.parse(localStorage.getItem('excel_data'));
        excelData.splice(params.id - 1, 1, formData);
        localStorage.setItem('excel_data', JSON.stringify(excelData));
    };

    const deleteData = () => {
        setEdit(false);
        const excelData = JSON.parse(localStorage.getItem('excel_data'));
        excelData.splice(params.id - 1, 1);
        localStorage.setItem('excel_data', JSON.stringify(excelData));
        navigate('/data');
    };

    return (
        <div className="p-4 rounded-lg shadow-md w-1/2 mt-20 cardMainBox">
            <div>
                <h5 className="text-2xl font-semibold mb-10">
                    Row {params.id}
                </h5>
                {Object.entries(data).map(([key]) => {
                    return (
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
                                    onChange={(e) => handleInputChange(key, e)}
                                    className="w-1/2 p-2 border border-gray-300 rounded"
                                    readOnly={!edit}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="buttonBox">
                    <button
                        onClick={edit ? updateData : changeToEdit}
                        className={
                            edit
                                ? 'border border-gray-500 hover:border-green-500 px-4 py-2 rounded transition duration-300 ease-in-out'
                                : 'border border-gray-500 hover:border-violet-500 px-4 py-2 rounded transition duration-300 ease-in-out'
                        }
                    >
                        {edit ? 'Update' : 'Edit'}
                    </button>
                    {edit && (
                        <button
                            onClick={deleteData}
                            className="border border-gray-500 hover:border-red-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
