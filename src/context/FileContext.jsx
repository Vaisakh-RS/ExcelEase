import React, { createContext, useContext, useEffect, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const handleStorageChange = () => {
    const storedFile = localStorage.getItem('file');
    setUploadedFile(storedFile ? storedFile : null);
  };

  const [uploadedFile, setUploadedFile] = useState(() => {
    // Use a function as the initial state
    const storedFile = localStorage.getItem('file');
    return storedFile ? storedFile : null;
  });

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
