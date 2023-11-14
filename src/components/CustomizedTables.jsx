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
import { TablePagination } from '@mui/material';
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
    const storedData = JSON.parse(localStorage.getItem('excel_data')) || [];

    const columns = JSON.parse(localStorage.getItem('table_col'));
    const navigate = useNavigate();

    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


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

    return (
        <>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Row</StyledTableCell>
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
                        {(rowsPerPage > 0
                            ? storedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : storedData
                        ).map((row, rowIndex) => (
                            <StyledTableRow key={rowIndex}>
                                <StyledTableCell key={rowIndex} align="center">
                                    {page * rowsPerPage + rowIndex + 1}
                                </StyledTableCell>
                                {columns.map((column, columnIndex) => (
                                    <StyledTableCell key={columnIndex} align="center">
                                        {row[column]}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell align="center">
                                    <Button onClick={() => handleUpdate(page * rowsPerPage + rowIndex)} color="success">
                                        Update
                                    </Button>
                                    <Button onClick={() => handleDelete(page * rowsPerPage + rowIndex)} color="warning">
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
                </TableContainer>
                <TablePagination
                
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={storedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                
            />
        </>
        
    );
};

export default CustomizedTables;
