import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleChange
    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        },
        '& .MuiGrid-container':{
            display: 'flex',
            alignItmes: 'center', 
            justifyContent: 'center',
            padding: "15px"
        },
        // '& .MuiGrid-grid-xs-12':{
        //     display: "flex",
        //     justifyContent: "center"
        // },
        '& .MuiButton-contained':{
            letterSpacing: "1px",
            margin: '0px 7px'
        }
    }
})
)

export const Form = (props) => {
    const classes = useStyles()

    return (
        <form className={classes.root} autoComplete='off'>
            {
                props.children
            }
        </form>
    )
}
