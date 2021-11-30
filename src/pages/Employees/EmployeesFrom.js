import React, {useEffect} from 'react';

// material-ui component
import { Grid } from '@mui/material';


// custom hook
import {useForm, Form} from '../../hooks/useForm';
// import { useStyles } from '../../hooks/useStyles';

// wrapper for TextField
import Input from '../../components/control/Input'
import RadioWrapper from '../../components/control/Radio'
import Select from '../../components/control/Select'
import CheckBox from '../../components/control/CheckBox';
import DatePicker from '../../components/control/DatePicker';
// values
const initalValues = {
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

const radioOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
]
const selectOptions = [
    {label: 'None', value: ''},
    {label: 'Frontend Devloper', value: 'frontend_devloper'},
    {label: 'Backend Devloper', value: 'backend_devloper'},
    {label: 'Data Scientist', value: 'data_scientist'},
    {label: 'Full Stack', value: 'full_stack'},
    {label: 'Android Devloper', value: 'android_devloper'},
]

const EmployeesFrom = () => {
    const {values: employDetails, handleChange} = useForm(initalValues)
    // const classes = useStyles()
   
    useEffect(()=>{

    },[]);
    console.log(employDetails)
    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Input 
                        variant='outlined'
                        label='Full Name'
                        value={employDetails.fullName}
                        name='fullName'
                        onChange={handleChange}
                    />
                    <Input 
                        variant='outlined'
                        label='Email'
                        value={employDetails.email}
                        name='email'
                        onChange={handleChange}
                    />
                    <Input
                        variant='outlined'
                        label='Mobile'
                        value={employDetails.mobile}
                        name='mobile'
                        onChange={handleChange}
                    />
                    <Input
                        variant='outlined'
                        label='City'
                        value={employDetails.city}
                        name='city'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioWrapper 
                        label='Gender'
                        name='gender'
                        onChange={handleChange}
                        employDetails={employDetails}
                        radioOptions={radioOptions}
                    />
                    <Select
                        label='Department'
                        value={employDetails.departmentId}
                        name='departmentId'
                        options={selectOptions}
                        onChange={handleChange}
                    />
                    <CheckBox
                        label='Permanent Employee'
                        value={employDetails.isPermanent}
                        name='isPermanent'
                        onChange={handleChange}
                    />
                    <DatePicker 
                        label='Hire Date'
                        name='hireDate'
                        value={employDetails.hireDate}
                        onChange={handleChange}
                    />
                </Grid>
                {/* <Grid item xs={6}>
                </Grid> */}
            </Grid>
        </Form>
    )
}

export default EmployeesFrom
