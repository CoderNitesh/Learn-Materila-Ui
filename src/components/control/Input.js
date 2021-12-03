import React from 'react'
import { TextField } from '@mui/material';

const Input = ({label, value, name, onChange, errorText=null, ...other}) => {
    const inputConfig = {
        variant: 'outlined',
        label,
        value,
        name,
        onChange
    }
    return <TextField {...inputConfig} {...other} {...(errorText && {error:true, helperText:errorText})}/>
}

export default Input
