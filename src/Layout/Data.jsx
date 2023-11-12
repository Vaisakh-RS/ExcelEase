import { Outlet } from 'react-router-dom';
import AddNewButton from '../components/AddNewButton';
import ViewSwitch from '../components/ViewSwitch';
import NewCard from '../components/NewCard';
import { useState } from 'react';

const DataLayout = () => {
    const [csvData, setCsvData] = useState(() => {
        const storedData = localStorage.getItem('excel_data');
        return storedData ? JSON.parse(storedData) : null;
    });

    const [newCardPage, setNewCardPage] = useState(false);

    const handleUpdateCsvData = (newCsvData) => {
        setCsvData(newCsvData); // Assuming setCsvData is the state updater
    };


    return (
        <>
            <ViewSwitch />
            <Outlet />
            <AddNewButton onAddNew={()=>{setNewCardPage(true)
            console.log(newCardPage)
            }} />
            {newCardPage && <NewCard data={csvData.length > 0 ? csvData[1] : {}} onClose={()=>{setNewCardPage(false)}}  updateCsvData={handleUpdateCsvData} />}
        </>
    );
};

export default DataLayout;
