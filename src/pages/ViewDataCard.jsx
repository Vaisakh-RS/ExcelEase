import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';

const ViewDataCard = () => {
    const params = useParams();
    const [row, setRow] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        const nRow =  JSON.parse(localStorage.getItem('excel_data'))[params.id-1];
        setRow(nRow);
    }, [ params.id]);

    const maxItems =  JSON.parse(localStorage.getItem('excel_data')).length;

    const handleNext = () => {
        const id = Number(params.id);
        if (id < maxItems) {
            navigate(`/data/:id`.replace(':id', `${id + 1}`));
        }
    };

    const handlePrev = () => {
        const id = Number(params.id);
        if (id > 1) {
            navigate(`/data/:id`.replace(':id', `${id - 1}`));
        }
    };

    return (
        <>
            <div>
                <Card data={row} />
                <button onClick={handlePrev}>Prev</button>
                <br />
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default ViewDataCard;
