import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import NewCard from '../components/NewCard';
import '../styles/viewdataCard.css';

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
    const id = Number(params.id);

    const handleNext = () => {
        if (id < maxItems) {
            navigate(`/data/:id`.replace(':id', `${id + 1}`));
        }
    };

    const hasNext = id < maxItems;

    const handlePrev = () => {
        if (id > 1) {
            navigate(`/data/:id`.replace(':id', `${id - 1}`));
        }
    };

    const handleUpdateCsvData = (newCsvData) => {
        setCsvData(newCsvData);
    };

    const hasPrevious = Number(id > 1);

    return (
        <>
            <div className="dataCardBox">
                <Card data={row} />
                <button
                    onClick={handlePrev}
                    className="absolute left-10 border border-gray-500 hover:border-violet-500 px-4 py-2 rounded transition duration-300 ease-in-out btn_control "
                    disabled={!hasPrevious}
                >
                    {'<'}
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-10 border border-gray-500 hover:border-violet-500 px-4 py-2 rounded transition duration-300 ease-in-out btn_control"
                    disabled={!hasNext}
                >
                    {'>'}
                </button>
            </div>
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
