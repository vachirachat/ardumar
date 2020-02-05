import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Page/Home';
import Community from './Page/Community';
import Aboutus from './Page/Aboutus';
import Market from './Page/Market';
import ButtonAppBar from './components/NavBar';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Footer from './components/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      secondary: {
          main: '#E33E7F'
        }
      }
    },
  )

const routing = (
    <MuiThemeProvider theme={theme}>
    <Router>
    <div>
    <ButtonAppBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            
            <Route path='/community' component={Community}/>
            <Route path='/aboutus' component={Aboutus}/>
            <Route path='/market' component={Market} />

        </Switch>
    <Footer />    
        </div>
    </Router>
    </MuiThemeProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
