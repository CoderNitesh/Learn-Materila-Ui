import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    return {
        values,
        setValues,
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
            padding: "20px"
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
