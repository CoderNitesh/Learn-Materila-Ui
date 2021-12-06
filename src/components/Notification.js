import React from 'react'

import { Snackbar, Alert } from '@mui/material';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(7)
    }
}))

const Notification = (props) => {
    const {notify, setNotify} = props;

    const classes = useStyles();

    const handleClose = () => {
        setNotify({
            ...notify,
            isOpen: false
        })
    }
    return (
        <Snackbar
            open={notify?.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            className={classes.root}
            onClose={handleClose}
        >
            <Alert
                severity={notify?.type}
                onClose={handleClose}
            >
                {
                    notify?.message
                }
            </Alert>
        </Snackbar>
    )
}

export default Notification
