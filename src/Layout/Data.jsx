import { Outlet } from 'react-router-dom';
import AddNewButton from '../components/AddNewButton';
import ViewSwitch from '../components/ViewSwitch';

const DataLayout = () => {
    return (
        <>
            <ViewSwitch />
            <Outlet />
            <AddNewButton />
        </>
    );
};

export default DataLayout;
