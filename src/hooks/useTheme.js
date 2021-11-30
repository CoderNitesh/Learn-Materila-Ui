import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#333996',
            light: '#3c44b126'
        },
        secondary: {
            main: '#f83245',
            light: '#f8324526'
        },
        background: {
            default: '#f4f5fd'
        }
    },
    shape: {
        borderRadius: '8px'
    },
    // props:{
    //     component name here 
    //     MuiIconButton:{
    //         color: 'primary'
    //     }
    // },
    // overrides: {
    //     component name here
    //     MuiAppBar: {
    //         root: {
    //             backgroundColor: '#fff !important',
    //             transform: 'translateZ(0)'
    //         }
    //     }
    // }
});