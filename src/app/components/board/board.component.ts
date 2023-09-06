import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  constructor(public gameService : GameService) { }

  ngOnInit(): void {
    // this.gameService.createBoard()
    console.log(this.gameService.board)
  }

}
