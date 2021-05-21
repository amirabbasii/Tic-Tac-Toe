import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';


function Square(props) {
    return (
      <Button variant="contained" style={{margin: 10,height: 130,width: 130,fontSize: 30,border: '4px solid red'}} color="primary"  onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }
 
export default Square;
