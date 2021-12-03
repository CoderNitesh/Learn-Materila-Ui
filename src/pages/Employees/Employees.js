import React, {useState, useEffect} from 'react'

// component
import PageHeader from '../../components/PageHeader';
import EmployeesForm from './EmployeesForm';

// hooks
import useTable from '../../hooks/useTable';

// icon
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

// material-ui component
import { InputAdornment, Paper,TableBody, TableCell, TableHead, TableRow, TableSortLabel, Toolbar } from '@mui/material';

// custom Form component
import Input from '../../components/control/Input'
import Button from '../../components/control/Button'
import Popup from '../../components/Popup';

// css
import { makeStyles } from '@mui/styles';

// data from localstorage
import { insertEmployee,getHeaders, updateEmployee} from '../../utils/localStorageOpration'

import _ from 'lodash';

const useStyles = makeStyles(theme => ({
        employeeContainer: {
            margin: theme.spacing(2),
            padding: theme.spacing(1),
            '& .makeStyles-table-13':{
                marginTop: '15px !important'
            }
        },
        searchToolBar: {
            display: 'felx',
            justifyContent: 'space-between',
            '& .MuiInputBase-input':{
                padding: theme.spacing(1.5)
            }
        },
        searchInput: {
            width: '75%'
        }
    })
)
const Employees = () => {
    const classes = useStyles();

    const [headers, setHeaders] = useState([]);
    const [records, setRecords] = useState([]);
    const [editRecord, setEditRecord] = useState({});
    const [openPopup, setOpenPopup] =useState(false);
    const [searchRecords, setSearchRecords] = useState([]);
    const [order, setOrder] = useState('');
    const [orderBy, setOrderBy] = useState('');

    const {
        TableContainer, 
        TablePagination, 
        dataAfterPagination,
        page,
        rowsPerPage
    } = useTable();

    useEffect(() => {
        setRecords(dataAfterPagination())
        setHeaders(getHeaders())
    },[])

    useEffect(() => {
        setRecords(dataAfterPagination())
    },[page, rowsPerPage]);

    useEffect(() => {
        setRecords(dataAfterPagination())
    },[editRecord])

    const handleEdit = (record) => {
        setEditRecord(record)
        setOpenPopup(true);
    }
    const addOrEdit = (employDetails,resetForm) => {
        if(employDetails.id === 0){
            insertEmployee(employDetails);
        }
        else{
            updateEmployee(employDetails)
            setEditRecord({});
        }
        setOpenPopup(false)
        resetForm();
    }

    const handleDelete = () => {
        console.log('Delete hit...!');
    }

    const handleSearch = (e) => {
        const {value} = e.target
        if(value === ''){
            setSearchRecords([])
        }else{
            const searchedData = records.filter(x => x.fullName.toLowerCase().includes(value))
            setSearchRecords(searchedData)
        }
    }
    const handleSortingClick = (data) => {
        const dataLowerCase = data.charAt(0).toLowerCase() + data.slice(1);
        const isAsc = orderBy === dataLowerCase && order === 'asc'
        setOrder(isAsc? 'desc': 'asc');
        setOrderBy(dataLowerCase);
        const sortedArray = _.orderBy(dataAfterPagination(), dataLowerCase, isAsc? 'desc': 'asc')
        setRecords(sortedArray)
    }

    return (
        <>
            <PageHeader
                pageTitle='New Employee'
                pageDescription='Theme Created by Material-Ui, Component Customization done by makeStyle'
                pageLogo = {<PeopleOutlineIcon fontSize='large' />}
            />
            <Paper className={classes.employeeContainer}>
                <Toolbar className={classes.searchToolBar}>
                    <Input 
                        label='Search Employees'
                        onChange={handleSearch}
                        className={classes.searchInput}
                        InputProps = {{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}

                    />
                    <Button
                        text='Add New'
                        variant='outlined'
                        onClick={() => setOpenPopup(true)}
                        startIcon={<AddIcon />}
                    />
                </Toolbar>
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
                                (searchRecords.length === 0? records:searchRecords)?.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.fullName}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.mobile}</TableCell>
                                        <TableCell>{item.gender}</TableCell>
                                        <TableCell>{item.departmentId}</TableCell>
                                        <TableCell>
                                            <EditIcon onClick={() => handleEdit(item)} color='secondary'/>
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
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title='Employee Form'
            >
                <EmployeesForm 
                    recordForEdit = {editRecord}
                    addOrEdit = {addOrEdit}
                />
            </Popup>
        </>
    )
}

export default Employees
