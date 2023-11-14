import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('excel_data');
        if (!data) {
            navigate('/');
        }
    }, [navigate]);

    return <Outlet />;
};

export default ProtectedRoute;
