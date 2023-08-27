import { Component, Inject, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {
  @Input() square : any;

  gameService = Inject(GameService);

  constructor() { }

  ngOnInit(): void {
  }

  changePlayer(): any {
    this.gameService.isGameRunning = true;

    if (this.gameService.isGameRunning && this.square.state === null){
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square)
    }
  }

}
