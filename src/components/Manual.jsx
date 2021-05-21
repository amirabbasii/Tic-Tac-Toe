import React, { Component } from 'react';
import Board from "./Board";
import calculatewiner from "./Calculatewiner";
import Button from '@material-ui/core/Button';

class Manual extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill("")
        }
      ],
      stepNumber: 0,
      turn: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculatewiner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.turn ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      turn: !this.state.turn
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      turn: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculatewiner(current.squares);

    const moves = history.map((step, move) => {
     // const classes = useStyles();
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
    } else {
      status = "Turn : Player " + (this.state.turn ? "X" : "O");
    }

   
  

    return (
     
      
        <div className="game" style={{padding:"2rem",width:"80%",height:"80%",paddingLeft:"5%",minWidth:"400px"}}>
    
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
 
export default Manual;
