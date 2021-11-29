import React from 'react';

// useStyles hold our css in form of js 
import { useStyles } from '../hooks/useStyles';

// the steps to use the withStyles here....!
/*
    import { withStyles } from '@mui/styles';

    const styles = {
        sideMenu: {
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            color: "white",
            left: "0px",
            width: "300px",
            height: "100%",
            backgroundColor: "#2E4C6D"
        }
    }

    console.log(props);
    const {classes} = props

    export default withStyles(styles)(SideMenu);

*/

const SideMenu = () => {
    const classes = useStyles();

    return (
        <div className={classes.sideMenu}>
            Side Menu            
        </div>
    )
}

export default SideMenu;
