import { Component } from '@angular/core';
import { GameService } from './services/game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';

  constructor(public gameService : GameService){

  }
}
