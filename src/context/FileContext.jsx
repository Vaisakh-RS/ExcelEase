// FileContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
    const [csvData, setCsvData] = useState(() => {
        const storedData = localStorage.getItem('csvData');
        return storedData ? JSON.parse(storedData) : [];
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const storedData = localStorage.getItem('csvData');
            setCsvData(storedData ? JSON.parse(storedData) : []);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <FileContext.Provider value={{ csvData, setCsvData }}>
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = () => {
    return useContext(FileContext);
};

export { FileContext };
