import { Component, Inject, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {
  @Input() square : any;

  charColor : string;

  constructor(public gameService : GameService) { }

  ngOnInit(): void {
  }

  changePlayer(): any {
    this.gameService.isGameRunning = true;
    this.charColor = this.gameService.getCharColor();
    console.log(this.charColor)

    if (this.gameService.isGameRunning && this.square.state === null){
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square)
    }
  }

}
