import React from 'react'

import { Button as MuiButton } from '@mui/material'

const Button = ({text, ...rest}) => {
    return <MuiButton {...rest}>{text}</MuiButton>
}

export default Button
