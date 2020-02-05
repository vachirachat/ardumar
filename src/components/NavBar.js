import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#E33E7F'
      }
    }
  },
)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#FAA423'}}>
        <Toolbar>
          <Button>
            <Link to={"/home"} style={{color:'white',underline:"none"}}>Home</Link>
          </Button>
          <Button>
            <Link to={"/aboutus"} style={{color:'white'}}>About us</Link>
          </Button>
          <Button className='button1'>
            <Link to={"/community"} style={{color:'white'}}>community</Link>
          </Button>
          <Button className='button1'>
            <Link to={'/market'} style={{color:'white'}}>market</Link>
          </Button>
          <Button color="inherit" style={{marginLeft:'73%'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}