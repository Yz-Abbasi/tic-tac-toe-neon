import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board : any[] = [];
  boardSize : number = 9;
  activePlayer : string = "X";
  turnCount : number = 0;
  isGameRunning : boolean = false;
  isGameOver : boolean = false;
  win : boolean = false;
  isDraw : boolean = false;

  constructor() {
    this.newGame();
  }

  newGame(): any {
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.win = false;
    this.isDraw = false;
    this.board = this.createBoard()
  }

  createBoard(): any {
    let board = [];
    for (let i  = 0; i < 9; i++){
      board.push({ 
      id:i,
      state : null
    });
    }
    return board;
  }

  get getBoard(){
    return this.board;
  }

  set setBoard(board : any){
    this.board = [...board];
  }

  changePlayerTurn(clickedSquare : any): void {
    this.updateBoard(clickedSquare);
    if (!this.isGameOver && this.activePlayer === "X"){
      this.activePlayer = "O"
    } else if (!this.isGameOver && this.activePlayer === "O"){
      this.activePlayer = "X"
    }
    this.turnCount++;
    console.log(this.turnCount)
    this.isGameOver = this.isGameOver ? true : false;
  }

  updateBoard(clickedSquare : any): void {
    this.board[clickedSquare.id].state = clickedSquare.state;
    if (this.isWinner){
      this.win = true;
      this.isGameRunning = false;
      this.isGameOver = true;
    };
    if (this.turnCount >= 8){
      this.isDraw = true;
      this.isGameRunning = false;
      this.isGameOver = true;
    }
  }

  get gameOver(): boolean {
    return this.turnCount >= 8 || this.win ? true : false;
  }

  get isWinner(): boolean {
    return this.checkDiagonal() || this.checkRows(this.board, "row") || this.checkRows(this.board, "col") ? true : false;
  }

  checkDiagonal(): any {
    const timesRun = 2,
      midSquare = this.board[4].state;

      for (let i = 0; i <= timesRun; i += 2){
        let upperCorner = this.board[i].state,
          lowerCorner = this.board[8 - i].state;

          if (midSquare && upperCorner && lowerCorner){
            if (midSquare === upperCorner && upperCorner === lowerCorner)
              return true;
          }
      }

  }

  checkRows(board : any, mode : any): boolean {
    const 
      ROW = mode === "row" ? true : false,
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC){
      let
        firstSquare = board[i].state,
        secondSquare = board[i + DIST].state,
        thirdSquare = board[i + (DIST * 2)].state;

        if (firstSquare && secondSquare && thirdSquare){
          if (firstSquare === secondSquare && secondSquare === thirdSquare)
            return true;
        }
    }
    return false;
  }

}
