import React, { useState } from 'react'

// component
import { Table, TablePagination as MuiTablePagination } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { getEmployees } from '../utils/localStorageOpration';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
            textAlign: 'center',
        }, 
        '& tbody td': {
            fontWeight: '300',
            textAlign: 'center',
        },
        '& tbody tr:hover':{
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        }
    }
}))

const useTable = () => {
    const pages = [3, 6, 9];
    const classes =useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    // total data
    const data = getEmployees();

    const TableContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    );

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
    }
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    } 
    
    const dataAfterPagination = () => { 
        return data.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    const TablePagination = () => (
        <MuiTablePagination 
            rowsPerPageOptions = {pages}
            page={page}
            component = 'div'
            rowsPerPage={rowsPerPage}
            count={data.length}
            onPageChange = {handlePageChange}
            onRowsPerPageChange = {handleRowsPerPageChange}
        />
    )


    return {
        TableContainer,
        TablePagination,
        dataAfterPagination,
        page,
        rowsPerPage
    }
}

export default useTable
