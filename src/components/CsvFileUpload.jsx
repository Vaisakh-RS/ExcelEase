import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

// eslint-disable-next-line react/prop-types
const CsvFileUpload = ({ onUpload }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            Papa.parse(file, {
                complete: (result) => {
                    const data = result.data;
                    onUpload(data);
                },
                header: true,
            });
        },
        [onUpload],
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            style={{
                padding: '20px',
                border: '1px dashed #ccc',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            <input {...getInputProps()} />
            <p>Drag and drop a CSV file here, or click to select one</p>
        </div>
    );
};

export default CsvFileUpload;
