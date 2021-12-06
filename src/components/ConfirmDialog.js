import React from 'react'

import { Dialog, DialogContent, DialogTitle, DialogActions, Typography, IconButton } from '@mui/material'

import Button from '../components/control/Button'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';


import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogTitle:{
        textAlign: 'center'
    },
    dialogActions: {
        justifyContent: 'center'
    },
    titleIcon:{
        backgroundColor: theme.palette.secondary.light,
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
            cursor: 'pointer'
        },
        '& .MuiSvgIcon-root':{
            color: theme.palette.secondary.main,
            fontSize: '8rem'
        }
    }
}))

const ConfirmDialog = ({confirmDialog, setConfirmDialog}) => {
    const classes = useStyles()
    return (
        <Dialog 
            open={confirmDialog.isOpen}
            classes={{paper: classes.dialog}}
        >
            <DialogTitle className={classes.dialogTitle}>
                <IconButton className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button 
                    color='secondary'
                    text='Yes'
                    variant='contained'
                    onClick={confirmDialog.onConfirm}
                    />
                <Button 
                    color='secondary'
                    text='No'
                    onClick={() => {setConfirmDialog({...confirmDialog, isOpen: false})}}
                />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
