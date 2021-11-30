import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import React from 'react'

const Select = ({name, label, onChange, options, value}) => {
    return (
        <FormControl variant='standard'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                onChange={onChange}
                value={value}
            >
                {
                    options.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))

                }
            </MuiSelect>
        </FormControl>
    )
}

export default Select
