import React, { createContext, useContext, useEffect, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <FileContext.Provider value={{ uploadedFile, setUploadedFile }}>
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = () => {
    return useContext(FileContext);
};

export { FileContext };
