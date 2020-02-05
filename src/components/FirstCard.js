import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FirstPic from '../AllPic/FirstPic.jpg';
import Button from '@material-ui/core/Button';
import '../Style/Style.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));
const useStyles2 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function FirstSheet() {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div>
      <Paper className={classes.root} style={{backgroundImage: `url(${FirstPic})`,width:"100%",height:"600px"}}>
        <div className="h1 eng" style={{color:'white',display:'flex',textAlign:'center',justifyContent:'center',marginTop:'15%'}}>
          LEARN SOMETHING NEW
        </div>
        <div className="h2 engBody" style={{color:'white',display:'flex',textAlign:'center',
          justifyContent:'center',marginTop:'2.5%',wordWrap:'break-word'}}>
          This is the place that we want you to learn
          something new on everyday
          
        </div>
        <Button className="mainOrange" style={{alignItems:'center',color:'white',
        borderStyle:'solid',borderWidth:'2px',borderColor:'#FAA423',
        marginLeft:'45%',marginTop:'6%'}}>
          Let's Learn</Button>
          
      </Paper>
      
    </div>
  );
}