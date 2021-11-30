import React from 'react'

// component
import PageHeader from '../../components/PageHeader'
import EmployeesFrom from './EmployeesFrom'

// icon
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import { Paper } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
        employeeContainer: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
    })
)
const Employees = () => {
    const classes = useStyles()
    
    return (
        <>
            <PageHeader
                pageTitle='New Employee'
                pageDescription='Form design with validation'
                pageLogo = {<PeopleOutlineIcon fontSize='large' />}
            />
            <Paper className={classes.employeeContainer}>
                <EmployeesFrom />
            </Paper>
        </>
    )
}

export default Employees
