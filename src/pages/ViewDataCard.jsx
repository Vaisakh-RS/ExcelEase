import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import NewCard from '../components/NewCard';
import CustomTabs from '../components/CustomTabs';

const ViewDataCard = () => {
    const [csvData, setCsvData] = useState(() => {
        const storedData = localStorage.getItem('excel_data');
        return storedData ? JSON.parse(storedData) : null;
    });

    const params = useParams();
    const [row, setRow] = useState({});
    const navigate = useNavigate();

    const [newCardPage, setNewCardPage] = useState(false);

    useEffect(() => {
        const nRow = JSON.parse(localStorage.getItem('excel_data'))[
            params.id - 1
        ];
        setRow(nRow);
    }, [params.id]);

    const maxItems = JSON.parse(localStorage.getItem('excel_data')).length;

    const handleNext = () => {
        const id = Number(params.id);
        if (id < maxItems) {
            navigate(`/data/:id`.replace(':id', `${id + 1}`));
        }
    };

    // const hasNext = Number(params.id) > 1;

    const handlePrev = () => {
        const id = Number(params.id);
        if (id > 1) {
            navigate(`/data/:id`.replace(':id', `${id - 1}`));
        }
    };

    const handleUpdateCsvData = (newCsvData) => {
        setCsvData(newCsvData); // Assuming setCsvData is the state updater
    };

    // const hasPrevious = Number(params.id);

    return (
        <>
            <CustomTabs />
            <div className="flex relative h-full w-full items-center justify-center">
                <Card data={row} />
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-1 ml-32 border border-gray-500 hover:border-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                    // disabled={!hasPrevious}
                >
                    Previous
                </button>
                <br />
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-1 mr-32 border border-gray-500 hover:border-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                    // disabled={!hasNext}
                >
                    Next
                </button>
            </div>
            <button
                className=" ml-32 mt-12 border border-gray-500 hover:border-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out"
                onClick={() => {
                    setNewCardPage(true);
                }}
            >
                Add New Data
            </button>

            {newCardPage && (
                <NewCard
                    data={csvData.length > 0 ? csvData[1] : {}}
                    onClose={() => {
                        setNewCardPage(false);
                    }}
                    updateCsvData={handleUpdateCsvData}
                />
            )}
        </>
    );
};

export default ViewDataCard;
