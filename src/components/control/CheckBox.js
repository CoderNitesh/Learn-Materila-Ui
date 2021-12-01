import React from 'react'

// components
import {FormControlLabel, Checkbox as MuiCheckBox, FormControl} from '@mui/material'

// utils
import {convertToDefEventPara} from '../../utils/convertToDefEventPara'

const CheckBox = ({label, name, onChange, value}) => {
    
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
