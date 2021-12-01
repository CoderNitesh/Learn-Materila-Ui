import React from 'react'
import { TextField } from '@mui/material';

const Input = ({label, value, name, onChange, errorText=null}) => {

    const inputConfig = {
        variant: 'outlined',
        label,
        value,
        name,
        onChange
    }
    return <TextField {...inputConfig} {...(errorText && {error:true, helperText:errorText})}/>
}

export default Input
