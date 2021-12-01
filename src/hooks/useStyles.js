import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
        sideMenu: {
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            color: "white",
            left: "0px",
            width: "300px",
            height: "100%",
            backgroundColor: "#2E4C6D"
        },
        appMain:{
            paddingLeft: '300px',
            width: "100%", // calcutlte the remaining amount width
        },
        appBar: {
            backgroundColor: '#fff !important',
            transform: 'translateZ(0)'
        },
        iconButton: {
            marginRight: "10px",
            '& .MuiBadge-root':{
                marginRight: "4px"
            }
        },
        searchInput:{
            opacity: '0.6',
            padding: '3px 8px',
            borderRadius: '5px',
            fontSize: '0.8rem',
            '&:hover':{
                backgroundColor: '#f2f2f2'
            },
            '& .MuiSvgIcon-root': {
                marginRight: "8px"
            }
        },
        // btnRoot: {
        //     backgroundColor: 'green'
        // },
        // btnLabel: {
        //     backgroundColor: 'red'
        // },
        buttonSubmit: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
)