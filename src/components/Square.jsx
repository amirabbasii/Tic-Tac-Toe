import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';


function Square(props) {
    return (
      <Button variant="contained" style={{margin: "2%",height:'10vh',width: "20%",fontSize: '5vw',border: '4px solid red'}} color="primary"  onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }
 
export default Square;
