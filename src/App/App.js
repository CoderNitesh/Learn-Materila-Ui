import React from 'react';

// components
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Employees from '../pages/Employees/Employees';


// theme
import {ThemeProvider} from "@mui/material/styles"
import { theme } from '../hooks/useTheme';

// makeStyles
import {useStyles} from '../hooks/useStyles'

// to default style
import { CssBaseline } from '@mui/material';


function App() {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}> 
        <Header />
        
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
