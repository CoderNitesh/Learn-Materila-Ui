import React from 'react'

// component
import PageHeader from '../../components/PageHeader'
import EmployeesForm from './EmployeesForm'

// icon
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import { Paper } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
        employeeContainer: {
            margin: theme.spacing(2),
            padding: theme.spacing(1)
        }
    })
)
const Employees = () => {
    const classes = useStyles()
    
    return (
        <>
            <PageHeader
                pageTitle='New Employee'
                pageDescription='Theme Created by Material-Ui, Component Customization done by makeStyle'
                pageLogo = {<PeopleOutlineIcon fontSize='large' />}
            />
            <Paper className={classes.employeeContainer}>
                <EmployeesForm />
            </Paper>
        </>
    )
}

export default Employees
