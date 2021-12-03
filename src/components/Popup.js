import React from 'react'

// material-ui component
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

// styles
import {makeStyles} from '@mui/styles';

// icons 
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2), 
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiSvgIcon-root':{
            cursor: 'pointer',
            padding: theme.spacing(0.5),
            fontSize: '2rem',
            backgroundColor:'#FFEBCC',
            transition: 'all 0.5s ease'
        },
        '& .MuiSvgIcon-root:hover':{
            backgroundColor:'#FAF9F9'
        }
    }
}));

const Popup = ({title, children, openPopup, setOpenPopup}) => {
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{paper: classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <Typography 
                    variant='h4'
                    component='div'
                >
                    {title}
                </Typography>
                <CloseIcon 
                    onClick={() => setOpenPopup(false)}
                    color='secondary'
                />
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
