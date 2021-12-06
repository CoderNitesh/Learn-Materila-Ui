import React from 'react';

// material-ui component
import { Grid } from '@mui/material';


// custom hook
import {useForm, Form} from '../../hooks/useForm';

// wrapper for TextField
import Input from '../../components/control/Input'
import RadioWrapper from '../../components/control/Radio'
import Select from '../../components/control/Select'
import CheckBox from '../../components/control/CheckBox';
import DatePicker from '../../components/control/DatePicker';
import Button from '../../components/control/Button';
// import { insertEmployee } from '../../utils/localStorageOpration';

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

const EmployeesForm = ({recordForEdit, addOrEdit}) => {
    const {values: employDetails, handleChange, errors, setErrors, resetForm} = useForm(recordForEdit || initalValues, true)
    
    const validate = () => {
        const error = {}
        if(employDetails.fullName === ""){
            error.fullName='FullName is Required*'
        }
        if(employDetails.email !== '' && !( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(employDetails.email)){
            error.email='Please Enter Valide Email Id*'
        }
        if(employDetails.mobile === ''){
            error.mobile='Mobile Number is Required*'
        }else{
            const mobileNumber = parseInt(employDetails.mobile)
            if(!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/).test(mobileNumber)) {
                error.mobile='Should be greater then 9 digits*'
            }
        }
        if(employDetails.departmentId === ""){
            error.departmentId='Department is Required*'
        }
        setErrors({...error})

        return Object.keys(error).length === 0? false: true 
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate(employDetails)){
            console.error("Please fill the form")
        }else{
            addOrEdit(employDetails, resetForm)
        }
    }
    // console.log(recordForEdit)

    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Input 
                        variant='outlined'
                        label='Full Name*'
                        value={employDetails.fullName}
                        name='fullName'
                        onChange={handleChange}
                        errorText={errors.fullName}
                    />
                    <Input 
                        variant='outlined'
                        label='Email'
                        value={employDetails.email}
                        name='email'
                        onChange={handleChange}
                        errorText={errors.email}
                    />
                    <Input
                        variant='outlined'
                        label='Mobile*'
                        value={employDetails.mobile}
                        name='mobile'
                        onChange={handleChange}
                        errorText={errors.mobile}
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
                        label='Department*'
                        value={employDetails.departmentId}
                        name='departmentId'
                        options={selectOptions}
                        onChange={handleChange}
                        errorText={errors.departmentId}
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
                    <div>
                        <Button 
                            text="Submit"
                            type='submit'
                            variant='contained'
                            size='medium'
                            onClick={handleSubmit}
                        />
                    </div>
                </Grid>
                {/* <Grid item xs={12}
                    
                >
                </Grid> */}
            </Grid>
        </Form>
    )
}

export default EmployeesForm
