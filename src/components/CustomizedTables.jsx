import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: theme.palette.common.white,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CustomizedTables = () => {
    // Retrieve data from local storage or use an empty array as a default
    const storedData = JSON.parse(localStorage.getItem('excel_data')) || [];

    const columns = Object.keys(storedData[0]);
    const navigate = useNavigate();

    const [refresh, setRefresh] = useState(false);

    const handleUpdate = (rowIndex) => {
        navigate('/data/:id'.replace(':id', rowIndex + 1));
    };

    const handleDelete = (rowIndex) => {
        const updatedData = [...storedData];
        updatedData.splice(rowIndex, 1);
        localStorage.setItem('excel_data', JSON.stringify(updatedData));
        setRefresh(!refresh);
        console.log(`Delete button clicked for row ${rowIndex}`);
    };

    useEffect(() => {
        // Your effect logic here
    }, [storedData, refresh]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <StyledTableCell key={index} align="center">
                                {column}
                            </StyledTableCell>
                        ))}
                        <StyledTableCell align="center">
                            Actions
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {storedData.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <StyledTableCell
                                    key={columnIndex}
                                    align="center"
                                >
                                    {row[column]}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell align="center">
                                <Button
                                    onClick={() => handleUpdate(rowIndex)}
                                    color="success"
                                >
                                    Update
                                </Button>
                                <Button
                                    onClick={() => handleDelete(rowIndex)}
                                    color="warning"
                                >
                                    Delete
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomizedTables;
