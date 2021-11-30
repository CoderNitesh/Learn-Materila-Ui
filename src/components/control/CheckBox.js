import React from 'react'
import {FormControlLabel, Checkbox as MuiCheckBox, FormControl} from '@mui/material'
const CheckBox = ({label, name, onChange, value}) => {

    const convertToDefEventPara = (name, value) => ({
        target: {
            name,
            value
        }
    })
    return (
        <FormControl>
            <FormControlLabel 
                control={
                    <MuiCheckBox 
                        name={name} 
                        color='secondary'
                        onChange={e => onChange(convertToDefEventPara(name, e.target.checked))} 
                        checked={value}
                    />
                } 
                label={label} 
            />
        </FormControl>
    )
}

export default CheckBox
