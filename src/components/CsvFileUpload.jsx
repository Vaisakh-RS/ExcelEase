import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

// eslint-disable-next-line react/prop-types
const CsvFileUpload = ({ onUpload }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            if (file.type == 'text/csv') {
                Papa.parse(file, {
                    complete: (result) => {
                        const data = result.data;
                        onUpload(data);
                    },
                    header: true,
                });
            } else if (
                file.type ===
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                file.type === 'application/vnd.ms-excel'
            ) {
                const arrayBuffer = file.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                onUpload(data);
            } else {
                alert(
                    'Unsupported file type. Please upload a CSV or XLSX file.',
                );
            }
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
