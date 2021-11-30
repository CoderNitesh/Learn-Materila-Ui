import React from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MuiDatePicker from '@mui/lab/DatePicker';

import { TextField } from '@mui/material';

const DatePicker = ({label, name, onChange, value}) => {
    const convertToDefEventPara = (name, value) => ({
        target: {
            name,
            value
        }
    })
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDatePicker 
                label={label}
                name={name}
                inputFormat="MM/dd/yyyy"
                onChange={e => onChange(convertToDefEventPara(name, e))}
                value={value}
                renderInput={params => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default DatePicker