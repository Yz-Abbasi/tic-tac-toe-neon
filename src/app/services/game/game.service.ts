import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private board : any = [];
  boardSize : number = 9;
  activePlayer : string = "X";
  turnCount : number = 0;
  isGameRunning : boolean = false;
  isGameOver : boolean = false;
  win : boolean = false;

  constructor() {
    this.newgame();
  }

  newgame(): void {
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameRunning = false;
    this.isGameOver = false;
    this.win = false;
    this.board = this.createBoard()
  }

  createBoard(): any {
    let board = [];
    for (let i  = 0; i < 9; i++){
      board.push({ 
      id:1,
      state : null
    });
    return board;
    }
  }

  get getBoard(): void{
    return this.board;
  }

  set setBoard(board : any){
    this.board = [...board];
  }

  changePlayerTurn(clickedSquare : any): void {
    this.updateBoard(clickedSquare);
    if (!this.isGameOver) this.activePlayer = "X" ? "O" : "X";
    this.turnCount++;
    this.isGameOver = this.isGameOver ? true : false;
  }

  updateBoard(clickedSquare : any): void {
    this.board[clickedSquare.id].state = clickedSquare.state;
    if (this.win){
      this.win = true;
      this.isGameOver = false;
      this.isGameOver = false;
    }
  }

  get gameOver(): boolean {
    return this.turnCount > 8 || this.win ? true : false;
  }

  get isWinner(): boolean {
    // return this.checkDiag() || this.checkRows(this.board, "row") || this.checkRows(this.board, "col") ? true : false;
  }
}
