import React, { Component } from 'react';
import Board from "./Board";
import calculatewiner from "./Calculatewiner";
import Button from '@material-ui/core/Button';
const weights = require('./data.json');
class AI extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill("")
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };    
            
  }
  policyAgent(){
  const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares;

    
    if (calculatewiner(squares) ) {
      return;
    }
    let tmp= Array(9).fill("")
    for (let i = 0; i < squares.length; i++) {
        if (squares[i]===""){
        	tmp[i]="m";
        }
        else{
        tmp[i]=squares[i];
        }
    }
    let i=weights[tmp.toString()]
    
    if (squares[i] || typeof i==='undefined'){
    for (let j = 0; j < squares.length; j++) {
    	if(!squares[j]){
    	i=j;
    	break;
    	}
    }
    }
    console.log(this.state.xIsNext);
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
    
    
  
  }

  handleClick(i) {

const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();


    if (calculatewiner(squares) || squares[i]) {
      return;
    }
    //squares[i] = this.state.xIsNext ? "X" : "O";
    squares[i]="X";
   
    
    if (!calculatewiner(squares)) {   
    
    let tmp= Array(9).fill("")
    for (let i = 0; i < squares.length; i++) {
        if (squares[i]===""){
        	tmp[i]="m";
        }
        else{
        tmp[i]=squares[i];
        }
    }
    let z=weights[tmp.toString()]
    
    if (squares[i] || typeof i==='undefined'){
    for (let j = 0; j < squares.length; j++) {
    	if(!squares[j]){
    	z=j;
    	break;
    	}
    }
    }
    squares[z] ="O";
    }
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
    
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculatewiner(current.squares);
    const moves = history.map((step, move) => {

      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        
        <li key={move} >
          <Button variant="outlined" color="secondary" onClick={() => this.jumpTo(move)}>{desc}</Button>
        
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if(this.state.stepNumber===5){
      status = "Equal!";
    }
   
  

    return (
     
      
        <div className="game" style={{padding:"2rem",width:"80%",paddingLeft:"5%",minWidth:"400px",minHeight:"290px"}}>
    
          <div className="game-board">
      <Board
        squares={current.squares}
        onClick={i => this.handleClick(i)}
      />
           </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
   </div>
       
    
     
 
    );
  }
}
 
export default AI;
