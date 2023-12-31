import { Outlet } from 'react-router-dom';
import AddNewButton from '../components/AddNewButton';
import ViewSwitch from '../components/ViewSwitch';
import NewCard from '../components/NewCard';
import { useState } from 'react';
import DownloadButton from '../components/DownloadButton';
import toast from 'react-hot-toast';

const DataLayout = () => {
    const [csvData, setCsvData] = useState(() => {
        const storedData = localStorage.getItem('excel_data');
        return storedData ? JSON.parse(storedData) : null;
    });

    const [newCardPage, setNewCardPage] = useState(false);

    const handleUpdateCsvData = (newCsvData) => {
        setCsvData(newCsvData);
    };

    return (
        <>
            <ViewSwitch />
            <Outlet />
            <DownloadButton />
            <AddNewButton
                onAddNew={() => {
                    setNewCardPage(true);
                    console.log(newCardPage);
                }}
            />
            {newCardPage && (
                <NewCard
                    data={csvData.length > 0 ? csvData[1] : {}}
                    onClose={() => {
                        setNewCardPage(false);
                        toast.success("New row added");
                    }}
                    updateCsvData={handleUpdateCsvData}
                    
                />
            )}
        </>
    );
};

export default DataLayout;
