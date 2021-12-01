import React from 'react'
import { FormControl, FormControlLabel, FormLabel,Radio,RadioGroup } from '@mui/material';

const RadioWrapper = ({label, name, radioOptions, onChange, employDetails}) => {

    const radioConfig = {
        name,
        value: employDetails.gender,
        onChange,
        defaultValue: radioOptions[0]?.value,
    }
    
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup 
                {...radioConfig}
                row
            >
                {
                    radioOptions.map(radio => (
                        <FormControlLabel key={radio.value} control={<Radio />} value={radio.value}  label={radio.label}/>
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioWrapper
