import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { GameService } from './services/game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'Tic-Tac-Toe';

  @Input() selectedColor : string;


  constructor(public gameService : GameService){

  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.gameService.charColor = this.selectedColor;
    // console.log(this.gameService.charColor)
  }  

}
