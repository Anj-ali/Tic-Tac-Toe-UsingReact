import React, { Component } from "react";
import "./App.css";
import Player from "./Component/choosePlayer";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(""),
      player: null,
      winner: null
    }
  }

  checkWinner(){
    let winLines = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]


    for(let index =0;index<winLines.length;index++){
      const [a, b, c] = winLines[index];

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[b] === this.state.board[c]){
        alert("You Won!!");
        this.setState({winner : this.state.player})
      }

    }

  }

  handleClick(index){
    //console.log(index)
    if(this.state.player && !this.state.winner){
      let board = this.state.board

    if(this.state.board[index] === ""){
      board[index] = this.state.player
      this.setState({
        board: board,
        player:this.state.player === "X"?"0":"X"
      })

      this.checkWinner()
    }
    }
        
  }

  setPlayer(player){
    this.setState({player})
  }

  handleReset(){
    this.setState({
      board : Array(9).fill(""),
      player: null,
      winner: null
    }
    )
  }

  render() {

    const Box = this.state.board.map((box ,index) => <div className="box" key = {index} onClick = {() => {this.handleClick(index)}}>{box}</div>)
    let status =  this.state.player ? <h2>Player'{this.state.player} chance</h2>: <Player player = {(e)=> this.setPlayer(e)}/>
    let win = this.state.winner ? <h3>Player {this.state.player} Won!!!</h3>: ""
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
       
        {status}
        <div className="board">
          {/* <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div> */}
          {Box}
          {win}
          <br></br>
          
        </div>
      </div>
    );
  }
}

export default App;
