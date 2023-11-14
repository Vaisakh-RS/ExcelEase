import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ViewSwitch.css';
import Search from './Search';

const ViewSwitch = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [table, setTable] = useState(param.id ? false : true);

    const handleTabClick = (tabN) => {
        setTable(tabN === 0 ? true : false);
        if (tabN === 0) {
            navigate('/data');
        } else {
            navigate('/data/1');
        }
    };

    useEffect(() => {
        setTable(param.id ? false : true);
    }, [param.id]);

    return (
        <div className="mainRightDiv">
            <div className="tabDiv">
                <div
                    onClick={() => {
                        handleTabClick(0);
                    }}
                    className={`tab ${table && 'active'}`}
                >
                    Table
                </div>
                <div
                    onClick={() => {
                        handleTabClick(1);
                    }}
                    className={`tab ${!table && 'active'}`}
                >
                    Row Data
                </div>
            </div>
            <Search />
        </div>
    );
};

export default ViewSwitch;
