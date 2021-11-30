import React from 'react'
import { TextField } from '@mui/material';

const Input = ({label, value, name, onChange}) => {

    const inputConfig = {
        variant: 'outlined',
        label,
        value,
        name,
        onChange
    }
    return (
        <TextField {...inputConfig}/>
)
}

export default Input
