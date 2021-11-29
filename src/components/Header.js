import React from 'react'

import { useStyles } from '../hooks/useStyles'

// material-ui 
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';

const Header = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
        <AppBar 
            position='static' 
            justifycontent="center"
            alignitems="center"
        >
            <Toolbar className={classes.toolBar}>
                <Grid container >
                    <Grid item>
                        <InputBase 
                            placeholder='Enter Employee'
                            startAdornment={<SearchIcon fontSize='small' />}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        {/* <IconButton classes={{root: classes.btnRoot,label: classes.btnLabel}}>
                            <Badge badgeContent={2} color='secondary'>
                                <NotificationsNoneIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={2} color='primary'>
                                <ChatBubbleOutlineIcon fontSize='small' />
                            </Badge>
                        </IconButton> */}
                        <IconButton className={classes.iconButton}>
                            <Badge badgeContent={2} color='secondary'>
                                <NotificationsNoneIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <Badge badgeContent={2} color='primary'>
                                <ChatBubbleOutlineIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
