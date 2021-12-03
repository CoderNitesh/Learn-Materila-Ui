import React, {useState, useEffect} from 'react'

// component
import PageHeader from '../../components/PageHeader';
// import EmployeesForm from './EmployeesForm';

// hooks
import useTable from '../../hooks/useTable';

// icon
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// material-ui component
import { Paper,TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

// css
import { makeStyles } from '@mui/styles';

// data from localstorage
import { getHeaders, getEmployees} from '../../utils/localStorageOpration'

import * as _ from 'lodash'

const useStyles = makeStyles(theme => ({
        employeeContainer: {
            margin: theme.spacing(2),
            padding: theme.spacing(1)
        }
    })
)
const Employees = () => {
    const [headers, setHeaders] = useState([]);
    const [order, setOrder] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const {
        TableContainer, 
        TablePagination, 
        dataAfterPagination
    } = useTable();

    useEffect(() => {
        // setRecords(dataAfterPagination)
        setHeaders(getHeaders())
    },[])

    const classes = useStyles();

    const handleEdit = () => {
        console.log('Edit hit...!');
    }
    
    const handleDelete = () => {
        console.log('Delete hit...!');
    }

    const handleSortingClick = (data) => {
        const isAsc = orderBy === data && order === 'asc'
        setOrder(isAsc? 'desc': 'asc');
        setOrderBy(data);
        const sortedArray = _.orderBy(getEmployees(), 'fullName', isAsc? 'desc': 'asc')
        console.log(sortedArray)
    }

    return (
        <>
            <PageHeader
                pageTitle='New Employee'
                pageDescription='Theme Created by Material-Ui, Component Customization done by makeStyle'
                pageLogo = {<PeopleOutlineIcon fontSize='large' />}
            />
            <Paper className={classes.employeeContainer}>
                {/* <EmployeesForm /> */}
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            {
                                headers?.map(item => (
                                    <TableCell key={item}>
                                        <TableSortLabel 
                                            onClick={() => handleSortingClick(item)}
                                            direction={orderBy === item? order: 'asc'}
                                            active={orderBy === item}
                                        >
                                            {item}
                                        </TableSortLabel>
                                    </TableCell>
                                ))
                            }
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            dataAfterPagination().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>{item.departmentId}</TableCell>
                                    <TableCell>
                                        <EditIcon onClick={handleEdit} color='secondary'/>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteIcon onClick={handleDelete} color='secondary' />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>
                <TablePagination />
            </Paper>
        </>
    )
}

export default Employees
