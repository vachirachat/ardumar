import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button disabled={props.disable} className={props.buttonClass} color={props.color}>{props.buttonName}</Button>
      
    </div>
  );
}