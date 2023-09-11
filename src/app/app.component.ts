import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameService } from './services/game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Tic-Tac-Toe';


  constructor(public gameService : GameService){

  }

  ngOnInit(): void {
    console.log(this.galaxy.nativeElement.offsetHeight)
  }

  generateStars(): any {
    for(let i = 0; i <= 100; i++){
      let xPosition = Math.random();
      let yPosition = Math.random();
      let start_type = Math.floor((Math.random() * 3) + 1);
      let position = {
        "x" : this.galaxy.nativeElement.offsetWidth * xPosition,
        "y" : this.galaxy.nativeElement.offsetHeight * yPosition
      };
    }
  }

  @ViewChild("galaxy", {static : true}) galaxy !: ElementRef;

}
