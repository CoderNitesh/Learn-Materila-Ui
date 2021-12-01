import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import React from 'react'

const Select = ({name, label, onChange, options, value, errorText=null}) => {

    // we pass this in MuiSelect only if the errorText is null
    const configError = {
        error:true, 
        helpertext:errorText
    }
    return (
        <FormControl variant='standard'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                onChange={onChange}
                value={value}
                {...(errorText && configError)}
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
