import React from 'react'

import { Card, Paper, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#fdfdff !important',
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: "flex",
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        padding: theme.spacing(2),
        display: 'inline-block',
        color: '#3c44b1 !important' 
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity: '0.6'
        }
    },
   

}))

const PageHeader = ({pageTitle, pageDescription, pageLogo}) => {
    const classes = useStyles()
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {pageLogo}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography 
                        variant='h6'
                        component='div'
                        
                    >
                        {pageTitle}
                    </Typography>
                    <Typography 
                        variant='subtitle2'
                        component='div'
                    >
                        {pageDescription}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
