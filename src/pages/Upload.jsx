import React, { useContext } from 'react';
import { useFileContext } from '../context/FileContext.jsx';

const Upload = () => {
    const { uploadedFile, setUploadedFile } = useFileContext();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        localStorage.setItem('file', file);
        setUploadedFile(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {uploadedFile ? <p>Uploaded file:{uploadedFile.name}</p> : null}
        </div>
    );
};

export default Upload;
